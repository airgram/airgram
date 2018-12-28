/*tslint:disable:prefer-for-of*/

import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { inject } from 'inversify'
import { provide } from 'inversify-binding-decorators'
import * as pickBy from 'lodash/pickBy'
import RpcError from '../errors/RpcError'
import Serializable from '../errors/Serializable'
import { bigStringInt, bytesToHex, longToBytes, now, uintToInt } from '../helpers'
import { MtpOptions } from '../interfaces/airgram'
import { ag } from '../interfaces/index'
import TYPES from '../ioc/types'

let clientId = 0
let requestId = 0

@provide(TYPES.MtpClient)
export default class MtpClient implements ag.MtpClient {
  public static factory (
    createInstance: () => ag.MtpClient,
    client: ag.Client
  ) {
    return (options: ag.MtpClientOptions) => {
      const instance = createInstance()
      Object.assign(instance, { client, ...options })
      instance.client = client
      instance.configure(options)
      return instance
    }
  }

  public client: ag.Client

  public dcId: number

  public prevSessionId: number[]

  public isNewConnection: boolean = true

  public serverSalt: Uint8Array | number[]

  public sessionId: number[]

  protected crypto: ag.MtpCrypto

  private activeRequests: Map<number, () => any> = new Map()

  private checkConnectionPeriod: number = 0

  private checkConnectionTimeout: any = null

  private checkLongPollInterval: any = null

  private destroyed: boolean = false

  private isFileTransfer: boolean

  private lastResend: { messageId: string, resendMsgIds: string[] } | null

  private lastServerMessages: string[] = []

  private longPoll: boolean = false

  private nextLongPollAt: number | null

  private nextRequestAt: number | null = null

  private nextRequestTimeout: any = null

  private offline: boolean = false

  private pendingAcks: string[] = []

  private pendingMessages: { [key: string]: number } = {}

  private pendingResends: string[] = []

  private sentMessages: { [key: string]: ag.MtpMessage } = {}

  private seqNo: number

  constructor (
    @inject(TYPES.Logger) public logger: ag.Logger,
    @inject(TYPES.MtpCryptoFactory) protected createCrypto: ag.MtpCryptoFactory,
    @inject(TYPES.MtpMessageFactory) protected createMessage: ag.MtpMessageFactory,
    @inject(TYPES.MtpSerializerFactory) protected createSerializer: ag.MtpSerializerFactory,
    @inject(TYPES.MtpDeserializerFactory) protected createDeserializer: ag.MtpDeserializerFactory
  ) {
    this.logger.namespace.push(String(++clientId))
  }

  public get config (): ag.Config {
    return this.client.config
  }

  public get mtpState (): ag.MtpState {
    return this.client.mtpState
  }

  public get timeManager (): ag.MtpTimeManager {
    return this.client.timeManager
  }

  public callApi<ParamsT, ResponseT> (
    method: string,
    params: ParamsT,
    options: ag.MtpOptions = {}
  ): Promise<ResponseT> {
    return new Promise((resolve, reject) => {
      const { body, resultType } = this.serializeRequest(method, params, options)
      const messageId = this.timeManager.generateMessageId()
      const seqNo = this.generateSeqNo()
      const message = this.createMessage({ body, isApi: true, messageId, resultType, seqNo })

      this.logger.verbose(() =>
        `wrapApiCall() ${method} ${JSON.stringify(params, null, 2)} ` +
        `${messageId} ${seqNo} ${JSON.stringify(options, null, 2)}`
      )

      this.pushMessage<ResponseT>(message, options)
        .then((response) => resolve(response))
        .catch((error) => {
          this.logger.error(`callApi() "${method}" ${JSON.stringify(params)} ${error.message}`)
          throw error
        })
        .catch((error) => reject(error))
    })
  }

  public configure (options: ag.MtpClientOptions) {
    this.dcId = options.dcId
    this.crypto = this.createCrypto(this, options.authKey)
    this.updateSessionId()
  }

  public async destroy (): Promise<void> {
    clearTimeout(this.checkConnectionTimeout)
    clearTimeout(this.nextRequestTimeout)
    clearInterval(this.checkLongPollInterval)
    this.longPoll = false
    this.lastServerMessages = []
    this.sentMessages = {}
    this.pendingMessages = {}
    this.pendingResends = []
    this.pendingAcks = []
    this.lastResend = null
    this.destroyed = true
    this.activeRequests.forEach((cancel, id) => {
      cancel()
      this.activeRequests.delete(id)
    })
  }

  public getApiUrl (dcId: number): string {
    return this.client.getApiUrl(dcId)
  }

  public startPolling (): void {
    if (this.longPoll) {
      throw new Error(`startPolling() already started`)
    }
    this.logger.info(() => `startPolling() dc "${this.dcId}"`)
    this.longPoll = true
    this.checkLongPollInterval = setInterval(() => this.checkLongPoll(), 10000)
    this.checkConnection()
  }

  public stop (): void {
    if (!this.longPoll) {
      throw new Error(`startPolling() already stopped`)
    }
    this.logger.info(() => `stop() dc "${this.dcId}"`)
    this.longPoll = false
    clearInterval(this.checkLongPollInterval)
    clearTimeout(this.checkConnectionTimeout)
  }

  protected serializeRequest (
    method: string,
    params: any,
    options: ag.MtpOptions
  ): { body: Uint8Array, resultType: string } {
    const serializerOptions: ag.MtpSerializerOptions = pickBy(options, (value, name) =>
      ['isMtp', 'maxLength'].includes(name) && value !== undefined)
    const serializer = this.createSerializer(serializerOptions)

    if (this.isNewConnection) {
      serializer.storeInt(0xda9b0d0d, 'invokeWithLayer')
      serializer.storeInt(this.config.layer, 'layer')
      serializer.storeInt(0x69796de9, 'initConnection')
      serializer.storeInt(this.config.app.id, 'api_id')
      serializer.storeString(this.config.deviceModel, 'device_model')
      serializer.storeString(this.config.systemVersion, 'system_version')
      serializer.storeString(this.config.app.version, 'app_version')
      serializer.storeString(this.config.langCode, 'lang_code')
    }

    if (options.afterMessageId) {
      serializer.storeInt(0xcb9f372d, 'invokeAfterMsg')
      serializer.storeLong(options.afterMessageId, 'msg_id')
    }

    const resultType = serializer.storeMethod(method, params)
    const body = serializer.getBytes(true) as Uint8Array

    return { body, resultType }
  }

  protected toggleOffline (nextStatus: boolean): void {
    if (this.destroyed || this.offline === nextStatus) {
      return
    }

    this.logger.info(() => `toggleOffline() "${nextStatus}" `)

    this.offline = nextStatus
    clearTimeout(this.checkConnectionTimeout)

    if (this.offline) {
      this.resetSchedule()
      this.delayedCheckConnection()
    } else {
      delete this.nextLongPollAt
      this.checkLongPoll()
      this.delayedRequest()
    }
  }

  private ackMessage (msgId: string): void {
    this.logger.verbose(() => `ackMessage() ${msgId}`)
    this.pendingAcks.push(msgId)
    this.delayedRequest(30000)
  }

  private applyServerSalt (newServerSalt: string): number[] {
    const serverSalt = this.serverSalt = longToBytes(newServerSalt)
    this.mtpState.serverSalt(this.dcId, bytesToHex(serverSalt)).catch((error) => {
      this.logger.error(`applyServerSalt() ${new Serializable(error)}`)
    })
    return serverSalt
  }

  private checkConnection (): void {
    // if (!this.longPoll) {
    //   this.logger.debug(() => `checkConnection() cancel request due disabled longPoll setting`)
    //   return
    // }

    this.logger.info(() => `checkConnection()`)

    clearTimeout(this.checkConnectionTimeout)

    this.ping().then(() => {
      this.toggleOffline(false)
    }).catch(() => {
      this.delayedCheckConnection()
    })
  }

  private checkLongPoll (): any {
    if (!this.longPoll) {
      return
    }
    if ((this.nextLongPollAt && (this.nextLongPollAt - now()) > 0) || this.offline) {
      return
    }

    const isClean = this.cleanupSent()
    this.mtpState.currentDcId().then((dcId) => {
      if (isClean && (dcId !== this.dcId || this.isFileTransfer)) {
        this.logger.verbose(() => `checkLongPoll() keep connection`)
        return
      }
      this.logger.verbose(() => `checkLongPoll() send longPoll`)
      this.sendLongPoll()
    }).catch((error) => {
      throw error
    })
  }

  private cleanupSent (): boolean {
    let notEmpty = false
    Object.keys(this.sentMessages).forEach((messageId: string) => {
      const message = this.sentMessages[messageId]
      if (message.notContentRelated && !(messageId in this.pendingMessages)) {
        delete this.sentMessages[messageId]
      } else if (message.isContainer && message.inner) {
        for (let i = 0; i < message.inner.length; i++) {
          if (message.inner[i] in this.sentMessages) {
            notEmpty = true
            return
          }
        }
        delete this.sentMessages[messageId]
      } else {
        notEmpty = true
      }
    })
    return !notEmpty
  }

  private createError (data: {
    error_code?: number,
    error_message?: string
  }): ag.RpcError {
    const code = uintToInt(data.error_code || 0)
    const message = data.error_message
    const matches = (message || '').match(/^([A-Z_0-9]+\b)(: (.+))?/) || []

    return new RpcError({
      code: code <= 0 ? 500 : code,
      message: matches[3] || ('CODE#' + code + ' ' + message),
      type: matches[1] || 'UNKNOWN'
    })
  }

  private delayedCheckConnection (minDelay = 60) {
    if (this.checkConnectionPeriod < 1.5) {
      this.checkConnectionPeriod = 1
    }

    const delay = Math.ceil(this.checkConnectionPeriod)

    this.logger.debug(() => `delayedCheckConnection() "${delay}s"`)

    this.checkConnectionTimeout = setTimeout(() => this.checkConnection(), delay * 1000)
    this.checkConnectionPeriod = Math.min(minDelay, this.checkConnectionPeriod * 1.5)
  }

  private delayedRequest (delay?: number): void {
    if (this.offline) {
      this.logger.verbose(() => `scheduleRequest() force checking connection because of offline status`)
      this.checkConnection()
    }
    const nextRequestAt = now() + (delay || 50)

    if (delay && this.nextRequestAt && this.nextRequestAt <= nextRequestAt) {
      return
    }

    clearTimeout(this.nextRequestTimeout)
    this.nextRequestTimeout = delay ?
      setTimeout(() => this.sendScheduledRequest(), delay) :
      setImmediate(() => this.sendScheduledRequest())
    this.nextRequestAt = nextRequestAt
  }

  private generateSeqNo (notContentRelated?: boolean): number {
    let seqNo = this.seqNo * 2

    if (!notContentRelated) {
      seqNo++
      this.seqNo++
    }

    return seqNo
  }

  private handleResponse (
    response: ag.MtpResponseMessage,
    messageId: string,
    sessionId: Uint8Array | number[]
  ): any {
    // const msgIdInt = parseInt(messageId.toString(10).substr(0, -10), 10)
    const msgIdInt = parseInt(messageId.substr(0, -10), 10)
    if (msgIdInt % 2) {
      this.logger.error(() => `processMessage() Server even message id ${messageId}`)
      return
    }

    this.logger.debug(() => `handleResponse() ${JSON.stringify(response)}`)

    switch (response._) {
      case 'msg_container': {
        for (const message of (response.messages || [])) {
          this.handleResponse(message, message.msg_id as string, sessionId)
        }
        break
      }

      case 'bad_server_salt': {
        const sentMessage = this.sentMessages[response.bad_msg_id as string]
        if (!sentMessage || sentMessage.seqNo !== response.bad_msg_seqno) {
          // this.logger.info(
          //   () => `processMessage() Bad server salt for invalid message ${JSON.stringify(response, null, 2)}`
          // )
          throw new Error('Bad server salt for invalid message')
        }

        this.logger.info(() => `processMessage() Bad server salt ` +
          `${JSON.stringify(response, null, 2)}`)

        this.applyServerSalt(response.new_server_salt as string)
        this.pushResend(response.bad_msg_id as string)
        this.ackMessage(messageId)
        break
      }

      case 'bad_msg_notification': {
        this.logger.info(
          () => `processMessage() Bad msg notification ` +
            `${JSON.stringify(response, null, 2)}`)

        const sentMessage = this.sentMessages[response.bad_msg_id as string]

        if (!sentMessage || sentMessage.seqNo !== response.bad_msg_seqno) {
          throw new Error('Bad msg notification for invalid message')
        }

        if (response.error_code === 16 || response.error_code === 17) {
          if (this.timeManager.applyServerTime(bigStringInt(String(messageId)).shiftRight(32).toString(10))) {
            this.logger.info(() => `processMessage() Update session`)
            this.updateSessionId()
          }

          const badMessage = this.updateSentMessage(response.bad_msg_id as string)

          this.logger.debug(() => `handleResponse() bad msg ${JSON.stringify(badMessage)}`)

          if (badMessage) {
            this.pushResend(badMessage.messageId)
          }
          this.ackMessage(messageId)
        }
        break
      }

      case 'message': {
        if (this.lastServerMessages.includes(messageId)) {
          this.ackMessage(messageId)
          return
        }
        this.lastServerMessages.push(messageId)
        if (this.lastServerMessages.length > 100) {
          this.lastServerMessages.shift()
        }
        this.handleResponse(response.body, response.msg_id as string, sessionId)
        break
      }

      case 'new_session_created': {
        this.ackMessage(messageId)
        this.processMessageAck(response.first_msg_id as string)
        this.applyServerSalt(response.server_salt as string)
        this.mtpState.currentDcId().then((currentDcId) => {
          if (currentDcId === this.dcId && !this.isFileTransfer) {
            this.client.handleUpdates({ _: 'new_session_created' })
          }
        }).catch((error) => {
          throw error
        })
        break
      }

      case 'msgs_ack': {
        for (const msgId of (response.msg_ids as string[])) {
          this.processMessageAck(msgId)
        }
        break
      }

      // case 'msg_detailed_info':
      //   if (!this.sentMessages[message.msg_id]) {
      //     this.ackMessage(message.answer_msg_id)
      //     break
      //   }
      // case 'msg_new_detailed_info':
      //   if (this.pendingAcks.indexOf(message.answer_msg_id)) {
      //     break
      //   }
      //   this.reqResendMessage(message.answer_msg_id)
      //   break

      case 'msg_detailed_info':
      case 'msg_new_detailed_info': {
        if (response._ === 'msg_detailed_info' && !this.sentMessages[response.msg_id as string]) {
          this.ackMessage(response.answer_msg_id as string)
          break
        }
        if (this.pendingAcks.indexOf(response.answer_msg_id as string)) {
          break
        }

        this.logger.warn(`handleResponse() "msg_detailed_info" resend message ` +
          `${JSON.stringify(response.answer_msg_id)}, ${JSON.stringify(response)}`)

        this.resendMessage(response.answer_msg_id as string)
        break
      }

      case 'msgs_state_info': {
        this.ackMessage(response.answer_msg_id as string)
        if (this.lastResend && this.lastResend.messageId === response.messageId && this.pendingResends.length) {
          const { resendMsgIds } = this.lastResend
          this.lastResend = null
          for (const resendMsgId of resendMsgIds) {
            const i = this.pendingResends.indexOf(resendMsgId)
            if (i !== -1) {
              this.logger.info(`handleResponse() "delete resend" ${this.pendingResends[i]}`)
              this.pendingResends.splice(i, 1)
            }
          }
        }
        break
      }

      case 'rpc_result': {
        const sentMessageId = response.messageId as string
        const sentMessage = this.sentMessages[sentMessageId]

        this.ackMessage(messageId)
        this.processMessageAck(sentMessageId)

        if (sentMessage) {
          const { deferred } = sentMessage
          if ((response.result as ag.MtpResponseMessage)._ === 'rpc_error') {
            const { error_code, error_message } = response.result as ag.MtpResponseMessage
            const error = this.createError({ error_code, error_message })
            this.logger.error(() => `processMessageAck() Rpc error ${error} ${new Serializable(deferred)}`)
            if (deferred) {
              deferred.reject(error)
            }
          } else {
            if (deferred) {
              deferred.resolve(response.result)
            }
            if (sentMessage.isApi) {
              this.isNewConnection = false
            }
          }
          delete this.sentMessages[sentMessageId]
        }
        break
      }

      default: {
        this.ackMessage(messageId)
        this.client.handleUpdates(response as ag.UpdatesResponse)
      }
    }
  }

  private mtpCall<ParamsT, ResponseT> (
    method: string,
    params: ParamsT,
    options: ag.MtpOptions,
    longPoll?: boolean
  ): ({
    message: ag.MtpMessage,
    promise: Promise<ResponseT>
  }) {
    const serializer = this.createSerializer({ isMtp: true })
    serializer.storeMethod(method, params)
    const messageId = this.timeManager.generateMessageId()
    const seqNo = this.generateSeqNo()
    const message = this.createMessage({
      body: serializer.getBytes(),
      longPoll,
      messageId,
      seqNo
    })

    this.logger.verbose(() => `mtpCall() ${method} ${JSON.stringify(params, null, 2)}`)

    return {
      message,
      promise: this.pushMessage<ResponseT>(message, options)
    }
  }

  private ping (): Promise<any> {
    const serializer = this.createSerializer({ isMtp: true })
    serializer.storeMethod('ping', { ping_id: this.crypto.generatePingId() })
    const message = this.createMessage({
      body: serializer.getBytes(),
      messageId: this.timeManager.generateMessageId(),
      seqNo: this.generateSeqNo(true)
    })
    return this.sendEncryptedRequest(message, { timeout: 15000 })
  }

  private prepareMtpMessage (object, options: MtpOptions): ({
    message: ag.MtpMessage,
    promise: Promise<AxiosResponse>
  }) {
    options = options || {}

    const serializer = this.createSerializer({ isMtp: true })
    serializer.storeObject(object, 'Object')

    const messageId = this.timeManager.generateMessageId()
    const seqNo = this.generateSeqNo(options.notContentRelated)
    const message = this.createMessage({
      body: serializer.getBytes(),
      messageId,
      seqNo
    })

    this.logger.info(() => `prepareMtpMessage() ${JSON.stringify(object)} ${messageId} ${seqNo}`)

    const promise = this.pushMessage<AxiosResponse>(message, options)

    return {
      message,
      promise
    }
  }

  private processMessageAck (messageId: string): boolean {
    const sentMessage = this.sentMessages[messageId]
    if (sentMessage && !sentMessage.isAcked) {
      delete sentMessage.body
      sentMessage.isAcked = true
      return true
    }
    return false
  }

  private pushMessage<ResponseT> (
    message: ag.MtpMessage,
    options: ag.MtpOptions = {}
  ): Promise<ResponseT> {
    return new Promise<ResponseT>((resolve, reject) => {
      this.sentMessages[message.messageId] = this.createMessage({
        ...message,
        deferred: { reject, resolve }
      }, options)
      this.pendingMessages[message.messageId] = 0

      this.logger.verbose(`pushMessage() ${JSON.stringify(options)}`)

      if (!options || !options.secondary) {
        this.delayedRequest()
      }
    })
  }

  private pushResend (messageId: string, delay?: number): void {
    const value = delay ? now() + delay : 0
    const sentMessage = this.sentMessages[messageId]
    if (sentMessage.isContainer) {
      for (const innerMessage of (sentMessage.inner as string[])) {
        this.pendingMessages[innerMessage] = value
      }
    } else {
      this.pendingMessages[messageId] = value
    }
    this.delayedRequest(delay)
  }

  private resendMessage (msgId: string): void {
    this.logger.verbose(() => `resendMessage() ${msgId}`)
    this.pendingResends.push(msgId)
    this.delayedRequest(100)
  }

  private resetSchedule () {
    clearTimeout(this.nextRequestTimeout)
    this.nextRequestAt = null
  }

  private sendEncryptedRequest (
    message: ag.MtpMessage,
    options: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    if (this.destroyed) {
      return Promise.reject(new Error('Unable to perform request on destroyed client'))
    }
    return new Promise((resolve, reject) => {
      const url = this.getApiUrl(this.dcId)
      const data = this.crypto.encryptRequest(message)
      const { token, cancel } = this.client.network.createCancelToken()

      requestId++
      options.cancelToken = token
      this.activeRequests.set(requestId, cancel)

      void this.client.network.sendRequest(url, data, options)
        .then((result) => {
          if (!result.data || !result.data.byteLength) {
            reject(new RpcError({ code: 406, type: 'NETWORK_BAD_RESPONSE', url }))
          } else {
            resolve(result)
          }
        })
        .catch((error) => {
          reject(error)
        })
        .finally(() => {
          this.activeRequests.delete(requestId)
        })
    })
  }

  private sendLongPoll (): void {
    if (!this.longPoll) {
      return
    }

    const maxWait = 25000
    this.nextLongPollAt = now() + maxWait

    const { promise } = this.mtpCall('http_wait', {
      max_delay: 500,
      max_wait: maxWait,
      wait_after: 150
    }, {
      noResponse: true
    }, true)

    promise.then(() => {
      this.nextLongPollAt = null
      setTimeout(() => {
        this.logger.verbose(() => `sendLongPoll() call checkLongPoll()`)
        this.checkLongPoll()
      }, 500)
    }).catch((error) => {
      this.logger.error(() => `sendLongPoll() "http_wait" ${error.message}`)
      this.checkConnectionPeriod = 5
      this.toggleOffline(true)
    })
  }

  private sendScheduledRequest (): void {
    if (this.offline) {
      return
    }

    this.logger.verbose(() => `sendScheduledRequest() ${JSON.stringify(this.pendingAcks)}`)

    this.nextRequestAt = null

    if (this.pendingAcks.length) {
      // const ackMsgIds: string[] = []
      // for (let i = 0; i < this.pendingAcks.length; i++) {
      //   ackMsgIds.push(this.pendingAcks[i])
      // }
      this.prepareMtpMessage(
        { _: 'msgs_ack', msg_ids: [...this.pendingAcks] },
        { notContentRelated: true, secondary: true }
      )
    }

    // if (this.pendingResends.length && (!this.lastResend || this.lastResend.expiresAt < now())) {
    if (this.pendingResends.length && !this.lastResend) {
      const resendMsgIds: string[] = [...this.pendingResends]
      const { message: resentMessage } = this.prepareMtpMessage(
        { _: 'msg_resend_req', msg_ids: resendMsgIds },
        { secondary: true, notContentRelated: true }
      )
      // this.lastResend = { messageId: resentMessage.messageId, resendMsgIds, expiresAt: now() + 3000 }
      this.lastResend = { messageId: resentMessage.messageId, resendMsgIds }
    }

    const messages: ag.MtpMessage[] = []
    const time = now()
    let messagesByteLen = 0
    let hasApiCall = false
    let hasHttpWait = false
    let lengthOverflow = false
    let message: ag.MtpMessage | null = null

    Object.keys(this.pendingMessages).forEach((messageId) => {
      const value = this.pendingMessages[messageId]

      if (!value || value >= time) {
        message = this.sentMessages[messageId]
        if (message) {
          if (!message.notContentRelated && lengthOverflow) {
            return
          }
          const messageByteLength = (message.body instanceof Uint8Array
            ? message.body.byteLength
            : (message.body as number[]).length) + 32

          if (!message.notContentRelated &&
            messagesByteLen &&
            messagesByteLen + messageByteLength > 655360) {
            lengthOverflow = true
            return
          }

          messages.push(message)
          messagesByteLen += messageByteLength

          if (message.isApi) {
            hasApiCall = true
          } else if (message.longPoll) {
            hasHttpWait = true
          }
        }
        delete this.pendingMessages[messageId]
      }
    })

    if (hasApiCall && !hasHttpWait) {
      const serializer = this.createSerializer({ isMtp: true })
      serializer.storeMethod('http_wait', {
        max_delay: 500,
        max_wait: 3000,
        wait_after: 150
      })
      messages.push({
        body: serializer.getBytes(),
        messageId: this.timeManager.generateMessageId(),
        seqNo: this.generateSeqNo()
      })
    }

    if (!messages.length) {
      return
    }

    const noResponseMessages: string[] = []
    if (messages.length > 1) {
      const container = this.createSerializer({ isMtp: true, maxLength: messagesByteLen + 64 })
      container.storeInt(0x73f1f8dc, 'CONTAINER[id]')
      container.storeInt(messages.length, 'CONTAINER[count]')
      const innerMessages: string[] = []
      for (let i = 0; i < messages.length; i++) {
        container.storeLong(messages[i].messageId, 'CONTAINER[' + i + '][msg_id]')
        innerMessages.push(messages[i].messageId)
        container.storeInt(messages[i].seqNo, 'CONTAINER[' + i + '][seq_no]')
        container.storeInt((messages[i].body as number[]).length, 'CONTAINER[' + i + '][bytes]')
        container.storeRawBytes(messages[i].body, 'CONTAINER[' + i + '][body]')
        if (messages[i].noResponse) {
          noResponseMessages.push(messages[i].messageId)
        }
      }

      const messageData = {
        inner: innerMessages,
        isContainer: true,
        messageId: this.timeManager.generateMessageId(),
        seqNo: this.generateSeqNo(true)
      }
      message = this.createMessage({ body: container.getBytes(true), ...messageData })
      this.sentMessages[messageData.messageId] = this.createMessage(messageData)

      this.logger.verbose(
        () => {
          return `sendScheduledRequest() Container` +
            `${JSON.stringify(innerMessages, null, 2)} ${message!.messageId} ${message!.seqNo}`
        }
      )
    } else if (message) {
      if (message!.noResponse) {
        noResponseMessages.push(message!.messageId)
      }
      this.sentMessages[message!.messageId] = message!
    }

    this.pendingAcks = []

    this.logger.debug(() => `sendScheduledRequest() sendEncryptedRequest() ${JSON.stringify(message)}`)

    this.sendEncryptedRequest(message!).then((result) => {
      this.toggleOffline(false)

      const response = this.crypto.decryptResponse(result.data, (msgId) => this.sentMessages[msgId])

      // this.logger.info(()
      // => `sendScheduledRequest() sendEncryptedRequest(${JSON.stringify(message)})`)
      this.logger.verbose(() =>
        `sendScheduledRequest() sendEncryptedRequest() "${message!.messageId}" ` +
        `Server response ${this.dcId} ${JSON.stringify(response)}`
      )

      this.handleResponse(response.response, response.messageId, response.sessionId)

      noResponseMessages.forEach((msgId) => {
        if (this.sentMessages[msgId]) {
          const { deferred } = this.sentMessages[msgId]
          delete this.sentMessages[msgId];
          (deferred as ag.DeferredResponse).resolve()
        }
      })

      this.checkLongPoll()
      this.checkConnectionPeriod = Math.max(1.1, Math.sqrt(this.checkConnectionPeriod))
    })
      .catch((error) => {
        if (message && message.isContainer) {
          if (message.inner) {
            message.inner.forEach((msgId) => {
              this.pendingMessages[msgId] = 0
            })
          }
          delete this.sentMessages[message.messageId]
        } else if (message) {
          this.pendingMessages[message.messageId] = 0
        }

        noResponseMessages.forEach((msgId) => {
          if (this.sentMessages[msgId]) {
            const { deferred } = this.sentMessages[msgId]
            delete this.sentMessages[msgId]
            delete this.pendingMessages[msgId];
            (deferred as ag.DeferredResponse).reject(error)
          }
        })

        if (error instanceof RpcError) {
          this.logger.error(() => `sendScheduledRequest() rpcError ${new Serializable(error)}`)
        } else if (!this.destroyed) {
          this.logger.error(() => `sendScheduledRequest() ${JSON.stringify(error.message)}`)
          this.toggleOffline(true)
          // throw error
        }
      })

    if (lengthOverflow) {
      this.delayedRequest()
    }
  }

  private updateSentMessage (sentMessageId: string): ag.MtpMessage | void {
    const sentMessage: ag.MtpMessage = this.sentMessages[sentMessageId]
    if (!sentMessage) {
      return
    }
    if (sentMessage.isContainer) {
      const newInner: string[] = []
      if (sentMessage.inner) {
        sentMessage.inner.forEach((innerSentMessageId) => {
          const innerSentMessage = this.updateSentMessage(innerSentMessageId)
          if (innerSentMessage) {
            newInner.push(innerSentMessage.messageId)
          }
        })
      }
      sentMessage.inner = newInner
    }

    sentMessage.messageId = this.timeManager.generateMessageId()
    sentMessage.seqNo = this.generateSeqNo(sentMessage.notContentRelated || sentMessage.isContainer)
    this.sentMessages[sentMessage.messageId] = sentMessage
    delete this.sentMessages[sentMessageId]

    return sentMessage
  }

  private updateSessionId (): void {
    this.seqNo = 0
    this.prevSessionId = this.sessionId
    this.sessionId = this.crypto.generateSessionId()
  }
}
