/*tslint:disable:prefer-for-of*/

import { inject } from 'inversify'
import { provide } from 'inversify-binding-decorators'
import Serializable from '../errors/Serializable'
import {
  aesDecryptSync,
  aesEncryptSync,
  bufferToArrayBuffer,
  bytesToArrayBuffer,
  bytesToHex,
  compareBytes,
  concatBuffer,
  convertToUint8Array,
  nextRandomInt,
  SecureRandom,
  sha1BytesSync,
  sha256HashSync
} from '../helpers'
import { ag } from '../interfaces/index'
import TYPES from '../ioc/types'

@provide(TYPES.MtpCrypto)
export default class MtpCrypto implements ag.MtpCrypto {
  public static factory (createInstance: () => ag.MtpCrypto, client: ag.MtpClient, authKey: Uint8Array | number[]) {
    const instance = createInstance()
    instance.configure(client, authKey)
    return instance
  }

  protected authKeyId: Uint8Array | number[]
  protected authKeyUint8: Uint8Array
  protected client: ag.MtpClient

  constructor (
    @inject(TYPES.Logger) public logger: ag.Logger,
    @inject(TYPES.MtpSerializerFactory) protected createSerializer: ag.MtpSerializerFactory,
    @inject(TYPES.MtpDeserializerFactory) protected createDeserializer: ag.MtpDeserializerFactory
  ) {}

  public configure (client: ag.MtpClient, authKey: Uint8Array) {
    this.client = client
    this.authKeyUint8 = convertToUint8Array(authKey)
    this.authKeyId = sha1BytesSync(authKey).slice(-8)
  }

  public decryptResponse (responseBuffer: ArrayBuffer, getSentMessage: (msgId: string) => ag.MtpMessage): {
    messageId: string,
    response: ag.MtpResponseMessage,
    seqNo: number,
    sessionId: number[] | Uint8Array
  } {
    const dataWithPadding = this.deserializeResponse(responseBuffer)
    const { messageId, seqNo, sessionId, bytes } = this.parseResponse(dataWithPadding)
    const response = this.parseMessageBytes(bytes, getSentMessage)
    return { messageId, response, seqNo, sessionId }
  }

  public encryptRequest (message: ag.MtpMessage): Int32Array {
    const data = this.createSerializer({ maxLength: message.body!.length + 2048 })
    data.storeIntBytes(this.client.serverSalt, 64, 'salt')
    data.storeIntBytes(this.client.sessionId, 64, 'session_id')
    data.storeLong(message.messageId, 'message_id')
    data.storeInt(message.seqNo, 'seq_no')
    data.storeInt(message.body!.length, 'message_data_length')
    data.storeRawBytes(message.body, 'message_data')

    const dataBuffer = data.getBuffer()
    const paddingLength = (16 - (data.offset % 16)) + 16 * (1 + nextRandomInt(5))
    const padding = new Uint8Array(paddingLength)

    new SecureRandom().nextBytes(padding)

    const dataWithPadding = concatBuffer(dataBuffer, padding)
    const encryptedResult = this.getEncryptedMessage(dataWithPadding)
    const request = this.createSerializer({ maxLength: encryptedResult.bytes.byteLength + 256 })

    request.storeIntBytes(this.authKeyId, 64, 'auth_key_id')
    request.storeIntBytes(encryptedResult.msgKey, 128, 'msg_key')
    request.storeRawBytes(encryptedResult.bytes, 'encrypted_data')

    return request.getArray()
  }

  public generatePingId (): [number, number] {
    return [nextRandomInt(0xFFFFFFFF), nextRandomInt(0xFFFFFFFF)]
  }

  public generateSessionId (): number[] {
    const sessionId = new Array(8)
    new SecureRandom().nextBytes(sessionId)
    return sessionId
  }

  private deserializeResponse (buffer: ArrayBuffer): ArrayBuffer {
    const deserializer = this.createDeserializer(buffer)
    const authKeyId = deserializer.fetchIntBytes(64, false, 'auth_key_id')

    if (!compareBytes(authKeyId, this.authKeyId)) {
      throw new Error('deserializeResponse() invalid server auth_key_id: ' + bytesToHex(authKeyId))
    }

    const msgKey = deserializer.fetchIntBytes(128, true, 'msg_key')
    const encryptedData = deserializer.fetchRawBytes(
      buffer.byteLength - deserializer.getOffset(),
      true,
      'encrypted_data'
    )
    const data = bufferToArrayBuffer(this.getDecryptedMessage(msgKey, encryptedData))
    const calcMsgKey = this.getMsgKey(data, false)

    if (!compareBytes(msgKey, calcMsgKey)) {
      throw new Error('deserializeResponse() server msgKey mismatch')
    }

    return data
  }

  private getAesKeyIv (msgKey: Uint8Array | number[], isOut: boolean): [Uint8Array, Uint8Array] {
    const authKey = this.authKeyUint8
    const x = isOut ? 0 : 8
    const sha2aText = new Uint8Array(52)
    const sha2bText = new Uint8Array(52)

    sha2aText.set(msgKey, 0)
    sha2aText.set(authKey.subarray(x, x + 36), 16)
    const resultSha2a = sha256HashSync(sha2aText)

    sha2bText.set(authKey.subarray(40 + x, 40 + x + 36), 0)
    sha2bText.set(msgKey, 36)
    const resultSha2b = sha256HashSync(sha2bText)

    const aesKey = new Uint8Array(32)
    const aesIv = new Uint8Array(32)
    const sha2a = new Uint8Array(resultSha2a)
    const sha2b = new Uint8Array(resultSha2b)

    aesKey.set(sha2a.subarray(0, 8))
    aesKey.set(sha2b.subarray(8, 24), 8)
    aesKey.set(sha2a.subarray(24, 32), 24)

    aesIv.set(sha2b.subarray(0, 8))
    aesIv.set(sha2a.subarray(8, 24), 8)
    aesIv.set(sha2b.subarray(24, 32), 24)

    return [aesKey, aesIv]
  }

  private getDecryptedMessage (
    msgKey: Uint8Array | number[],
    encryptedData: Uint8Array | number[]
  ): Uint8Array | number[] {
    const keyIv = this.getAesKeyIv(msgKey, false)
    return aesDecryptSync(encryptedData, keyIv[0], keyIv[1])
  }

  private getEncryptedMessage (dataWithPadding: ArrayBuffer): { bytes: ArrayBuffer | Uint8Array, msgKey: Uint8Array } {
    const msgKey = this.getMsgKey(dataWithPadding, true)
    const keyIv = this.getAesKeyIv(msgKey, true)
    const encryptedBytes = aesEncryptSync(dataWithPadding, keyIv[0], keyIv[1])
    return {
      bytes: Array.isArray(encryptedBytes) ? new Uint8Array(encryptedBytes) : encryptedBytes,
      msgKey
    }
  }

  private getMsgKey (dataWithPadding: ArrayBuffer, isOut: boolean): Uint8Array {
    const authKey = this.authKeyUint8
    const x = isOut ? 0 : 8
    const msgKeyLargePlain = concatBuffer(authKey.subarray(88 + x, 88 + x + 32), dataWithPadding)
    const msgKeyLarge = sha256HashSync(msgKeyLargePlain)
    return new Uint8Array(msgKeyLarge).subarray(8, 24)
  }

  private parseMessageBytes (bytes: Uint8Array | number[], getSentMessage: (msgId: string) => ag.MtpMessage): any {
    const buffer = bytesToArrayBuffer(bytes)
    const options = {
      isMtp: true,
      override: {
        mt_message (result: ag.MtpResponseMessage, field) {
          result.msg_id = this.fetchLong(field + '[msg_id]')
          result.seqno = this.fetchInt(field + '[seqno]')
          result.bytes = this.fetchInt(field + '[bytes]')

          const resultOffset = this.getOffset()

          try {
            result.body = this.fetchObject('Object', field + '[body]')
          } catch (error) {
            this.logger.error(() => `[${this.clientId}] parseResponse() parse error: ${new Serializable(error)}`)
            result.body = { _: 'parse_error', error }
          }
          if (this.offset !== resultOffset + result.bytes) {
            this.offset = resultOffset + result.bytes
          }
        },
        mt_rpc_result (result, field) {
          result.messageId = this.fetchLong(field + '[req_msg_id]')

          const sentMessage = getSentMessage(result.messageId)
          const type = (sentMessage && sentMessage.resultType) || 'Object'

          if (result.messageId && !sentMessage) {
            return
          }
          result.result = this.fetchObject(type, field + '[result]')
        }
      }
    }
    const deserializer = this.createDeserializer(buffer, { ...options })

    return deserializer.fetchObject('', 'INPUT')
  }

  private parseResponse (buffer: ArrayBuffer): {
    bytes: Uint8Array | number[],
    messageId: string,
    sessionId: Uint8Array | number[],
    seqNo: number
  } {
    const deserializer = this.createDeserializer(buffer, { isMtp: true })

    deserializer.fetchIntBytes(64, false, 'salt')

    const sessionId = deserializer.fetchIntBytes(64, false, 'session_id')
    const messageId = deserializer.fetchLong('message_id')

    if (!compareBytes(sessionId, this.client.sessionId) &&
      (!this.client.sessionId && !compareBytes(sessionId, this.client.prevSessionId))) {
      throw new Error('Invalid server session_id: ' + bytesToHex(sessionId))
    }

    const seqNo = deserializer.fetchInt('seq_no')
    const totalLength = buffer.byteLength // dataWithPadding.bytesLength
    const messageBodyLength = deserializer.fetchInt('message_data[length]')

    if ((messageBodyLength % 4 !== 0) || (messageBodyLength > totalLength - deserializer.getOffset())) {
      throw new Error('Invalid body length: ' + messageBodyLength)
    }

    const bytes = deserializer.fetchRawBytes(messageBodyLength, true, 'message_data')
    const offset = deserializer.getOffset()
    const paddingLength = totalLength - offset

    if (paddingLength < 12 || paddingLength > 1024) {
      throw new Error('[MT] Invalid padding length: ' + paddingLength)
    }

    return {
      bytes,
      messageId,
      seqNo,
      sessionId
    }
  }
}
