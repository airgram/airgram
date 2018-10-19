import { inject, interfaces } from 'inversify'
import { provide } from 'inversify-binding-decorators'
import { RpcError, Serializable } from '../errors'
import {
  aesDecryptSync,
  aesEncryptSync,
  BigInteger,
  bytesModPow,
  bytesToArrayBuffer,
  bytesToHex,
  compareBytes,
  getBpe,
  hexToBytes,
  nextRandomInt,
  now,
  pqPrimeBigInteger,
  pqPrimeLeemon,
  pqPrimeLong,
  rsaEncrypt,
  SecureRandom,
  sendRequest,
  sha1BytesSync,
  str2bigInt,
  xorBytes
} from '../helpers'
import { ag } from '../interfaces'
import TYPES from '../ioc/types'
import goog from '../vendor/goog-math-long'
// const requestLib = require( 'request-promise-native')

@provide(TYPES.MtpAuthorizer)
export default class MtpAuthorizer implements ag.MtpAuthorizer {
  public static factory (createInstance: () => ag.MtpAuthorizer, client: ag.Client, context?: interfaces.Context) {
    const instance = createInstance()
    instance.client = client
    return instance
  }

  public client: ag.Client
  private readonly cache: { [key: string]: any } = {}

  constructor (
    @inject(TYPES.Logger) public logger: ag.Logger,
    @inject(TYPES.MtpRsaKeysManager) protected rsaKeyManager: ag.MtpRsaKeysManager,
    @inject(TYPES.MtpSerializerFactory) protected createSerializer: ag.MtpSerializerFactory,
    @inject(TYPES.MtpDeserializerFactory) protected createDeserializer: ag.MtpDeserializerFactory
  ) {}

  public auth (dcId: number): Promise<ag.MtpAuthorizerInfo> {
    return new Promise((resolve, reject) => {
      if (this.cache[dcId] !== undefined) {
        return this.cache[dcId]
      }

      const nonce: number[] = []
      for (let i = 0; i < 16; i++) {
        nonce.push(nextRandomInt(0xFF))
      }

      if (!this.client.getApiUrl(dcId)) {
        throw new Error('No server found for dc ' + dcId)
      }

      const auth: ag.MtpAuthorizerInfo = {
        authKey: [],
        dcId,
        deferred: {
          reject,
          resolve
        },
        newNonce: [],
        nonce,
        serverNonce: [],
        serverSalt: []
      }

      this.sendReqPQ(auth)
    })
  }

  private decryptServerDhDataAnswer (auth: ag.MtpAuthorizerInfo, encryptedAnswer: Uint8Array): void {
    if (!('newNonce' in auth) || !auth.newNonce) {
      throw new Error('decryptServerDhDataAnswer() missed "newNonce"')
    }
    if (!('serverNonce' in auth) || !auth.serverNonce) {
      throw new Error('decryptServerDhDataAnswer() missed "serverNonce"')
    }
    auth.localTime = now()
    auth.tmpAesKey = sha1BytesSync(auth.newNonce.concat(auth.serverNonce))
      .concat(sha1BytesSync(auth.serverNonce.concat(auth.newNonce)).slice(0, 12))
    auth.tmpAesIv = sha1BytesSync(auth.serverNonce
      .concat(auth.newNonce))
      .slice(12)
      .concat(sha1BytesSync(([] as number[]).concat(auth.newNonce, auth.newNonce)), auth.newNonce.slice(0, 4))

    const answerWithHash = aesDecryptSync(encryptedAnswer, auth.tmpAesKey, auth.tmpAesIv)
    const hash = answerWithHash.slice(0, 20)
    const answerWithPadding = answerWithHash.slice(20)
    const buffer = bytesToArrayBuffer(answerWithPadding)
    const deserializer = this.createDeserializer(buffer, { isMtp: true })
    const response = deserializer.fetchObject('Server_DH_inner_data')

    if (response._ !== 'server_DH_inner_data') {
      throw new Error('server_DH_inner_data response invalid')
    }
    if (!compareBytes(auth.nonce, response.nonce)) {
      throw new Error('server_DH_inner_data nonce mismatch')
    }
    if (!compareBytes(auth.serverNonce, response.server_nonce)) {
      throw new Error('server_DH_inner_data serverNonce mismatch')
    }
    this.logger.verbose(() => `mtpDecryptServerDhDataAnswer() Done decrypting answer`)

    auth.g = response.g
    auth.dhPrime = response.dh_prime
    auth.gA = response.g_a
    auth.serverTime = response.server_time
    auth.retry = 0

    this.verifyDhParams(auth.g, auth.dhPrime, auth.gA)

    const offset = deserializer.getOffset()

    if (!compareBytes(hash, sha1BytesSync(answerWithPadding.slice(0, offset)))) {
      throw new Error('server_DH_inner_data SHA1-hash mismatch')
    }

    this.client.timeManager.applyServerTime(auth.serverTime, auth.localTime)
  }

  private pqPrimeFactorization (pqBytes: Uint8Array): [number[], number[], number] | false {
    const what = new BigInteger(pqBytes)
    let result: [number[], number[], number] | false = false

    try {
      result = pqPrimeLeemon(str2bigInt(what.toString(16), 16, Math.ceil(64 / getBpe()) + 1))
    } catch (e) {
      this.logger.error(() => `pqPrimeFactorization() pqPrimeLeemon() ${new Serializable(e)}`)
    }

    if (result === false && what.bitLength() <= 64) {
      try {
        result = pqPrimeLong(goog.math.Long.fromString(what.toString(16), 16))
      } catch (e) {
        this.logger.error(() => `pqPrimeFactorization() pqPrimeLong() ${new Serializable(e)}`)
      }
    }

    if (result === false) {
      result = pqPrimeBigInteger(what)
    }

    return result
  }

  private sendNetworkRequest (
    url: string,
    resultArray: Int32Array,
    deferred: ag.DeferredResponse
  ): Promise<any> {
    this.logger.verbose(`sendNetworkRequest() "${url}"`)

    return sendRequest(url, resultArray).then(deferred.resolve)
      .catch((error) => {
        if (error.code === 'ENETUNREACH') {
          const nextDeferred = {
            checkConnectionPeriod: 0,
            ...deferred
          }
          nextDeferred.checkConnectionPeriod = Math.ceil(Math.min(60, (1 + nextDeferred.checkConnectionPeriod) * 1.5))
          this.logger.error(() => `no connection, will send new request in ${nextDeferred.checkConnectionPeriod} sec`)
          setTimeout(
            () => this.sendNetworkRequest(url, resultArray, nextDeferred),
            nextDeferred.checkConnectionPeriod * 1000
          )
        } else {
          this.logger.error(`sendNetworkRequest() "${url}" ${error.message}`)
          return deferred.reject(error)
        }
      })
  }

  private sendReqDhParams (auth: ag.MtpAuthorizerInfo) {
    const deferred = auth.deferred

    auth.newNonce = new Array(32)
    new SecureRandom().nextBytes(auth.newNonce)

    const data = this.createSerializer({ isMtp: true })
    data.storeObject({
      _: 'p_q_inner_data',
      new_nonce: auth.newNonce,
      nonce: auth.nonce,
      p: auth.p,
      pq: auth.pq,
      q: auth.q,
      server_nonce: auth.serverNonce
    }, 'P_Q_inner_data', 'DECRYPTED_DATA')

    const dataWithHash = sha1BytesSync(data.getBuffer()).concat(data.getBytes() as number[])

    const request = this.createSerializer({ isMtp: true })
    request.storeMethod('req_DH_params', {
      encrypted_data: rsaEncrypt(auth.publicKey, dataWithHash),
      nonce: auth.nonce,
      p: auth.p,
      public_key_fingerprint: auth.publicKey.fingerprint,
      q: auth.q,
      server_nonce: auth.serverNonce
    })

    this.logger.verbose(() => `mtpSendReqDhParams() dc "${auth.dcId}"`)

    this.sendRequest(auth.dcId, request.getBuffer()).then((deserializer) => {
      const response = deserializer.fetchObject('Server_DH_Params', 'RESPONSE')

      if (response._ !== 'server_DH_params_fail' && response._ !== 'server_DH_params_ok') {
        deferred.reject(new Error('Server_DH_Params response invalid: ' + response._))
        return false
      }

      if (!compareBytes(auth.nonce, response.nonce)) {
        deferred.reject(new Error('Server_DH_Params nonce mismatch'))
        return false
      }

      if (!compareBytes(auth.serverNonce, response.server_nonce)) {
        deferred.reject(new Error('Server_DH_Params server_nonce mismatch'))
        return false
      }

      if (response._ === 'server_DH_params_fail') {
        const newNonceHash = sha1BytesSync(auth.newNonce).slice(-16)
        if (!compareBytes(newNonceHash, response.new_nonce_hash)) {
          deferred.reject(new Error('server_DH_params_fail new_nonce_hash mismatch'))
          return false
        }
        deferred.reject(new Error('server_DH_params_fail'))
        return false
      }

      try {
        this.decryptServerDhDataAnswer(auth, response.encrypted_answer)
      } catch (e) {
        deferred.reject(e)
        return false
      }

      this.sendSetClientDhParams(auth)
    }, (error) => {
      deferred.reject(error)
    })
  }

  private sendReqPQ (auth: ag.MtpAuthorizerInfo): void {
    const deferred = auth.deferred

    const request = this.createSerializer({ isMtp: true })
    request.storeMethod('req_pq', { nonce: auth.nonce })

    this.logger.verbose(() => `sendReqPQ() Send req_pq ${bytesToHex(auth.nonce)}`)

    this.sendRequest(auth.dcId, request.getBuffer()).then((deserializer) => {
      const response: {
        _: string,
        nonce: number[],
        server_nonce: number[]
        pq: number[]
        server_public_key_fingerprints: number[]
      } = deserializer.fetchObject('ResPQ')

      if (response._ !== 'resPQ') {
        throw new Error('resPQ response invalid: ' + response._)
      }

      if (!compareBytes(auth.nonce, response.nonce)) {
        throw new Error('resPQ nonce mismatch')
      }

      auth.serverNonce = response.server_nonce
      auth.pq = response.pq
      auth.fingerprints = response.server_public_key_fingerprints

      this.logger.verbose(() =>
        `mtpSendReqPQ() Got ResPQ ` +
        `${bytesToHex(auth.serverNonce)} ${bytesToHex(auth.pq)} ${auth.fingerprints}`
      )

      auth.publicKey = this.rsaKeyManager.selectRsaKeyByFingerPrint(auth.fingerprints)

      if (!auth.publicKey) {
        throw new Error('No public key found')
      }

      this.logger.verbose(() => `mtpSendReqPQ() 'PQ factorization start ${auth.pq}`)

      const pAndQ = this.pqPrimeFactorization(auth.pq)

      if (!pAndQ) {
        throw new Error('Error factorizing p and q')
      }

      auth.p = pAndQ[0]
      auth.q = pAndQ[1]

      this.logger.verbose(() => `mtpSendReqPQ() 'PQ factorization done ${pAndQ[2]}`)

      this.sendReqDhParams(auth)
    }).catch((error) => {
      this.logger.error(() => `mtpSendReqPQ() ${new Serializable(error)}`)
      deferred.reject(error)
    })

    this.rsaKeyManager.prepareRsaKeys()
  }

  private sendRequest (dcId: number, requestBuffer: ArrayBuffer | SharedArrayBuffer): Promise<ag.MtpDeserializer> {
    return new Promise<ag.MtpDeserializer>((resolve, reject) => {
      const requestLength = requestBuffer.byteLength
      const requestArray = new Int32Array(requestBuffer)

      const header = this.createSerializer()
      header.storeLongP(0, 0, 'auth_key_id') // Auth key
      header.storeLong(this.client.timeManager.generateMessageId(), 'msg_id') // Msg_id
      header.storeInt(requestLength, 'request_length')

      const headerBuffer = header.getBuffer()
      const headerArray = new Int32Array(headerBuffer)
      const headerLength = headerBuffer.byteLength

      const resultBuffer = new ArrayBuffer(headerLength + requestLength)
      const resultArray = new Int32Array(resultBuffer)

      resultArray.set(headerArray)
      resultArray.set(requestArray, headerArray.length)

      // const requestData = resultArray
      const url = this.client.getApiUrl(dcId)
      const baseError = { code: 406, type: 'NETWORK_BAD_RESPONSE', url }

      const resolvePromise = (result) => {
        if (!result.data || !result.data.byteLength) {
          reject(new RpcError(baseError))
        }

        const deserializer = this.createDeserializer(result.data, { isMtp: true })
        deserializer.fetchLong('auth_key_id')
        deserializer.fetchLong('msg_id')
        deserializer.fetchInt('msg_len')
        resolve(deserializer)
      }

      const rejectPromise = (error) => reject(new RpcError({ ...baseError, original: error }))

      this.sendNetworkRequest(url, resultArray, {
        reject: rejectPromise,
        resolve: resolvePromise
      }).catch(rejectPromise)
    })
  }

  private sendSetClientDhParams (auth: ag.MtpAuthorizerInfo): void {
    const deferred = auth.deferred
    const gBytes = hexToBytes(auth.g.toString(16))

    auth.b = new Array(256)
    new SecureRandom().nextBytes(auth.b)

    const gB = bytesModPow(gBytes, auth.b, auth.dhPrime)
    const data = this.createSerializer({ isMtp: true })
    data.storeObject({
      _: 'client_DH_inner_data',
      g_b: gB,
      nonce: auth.nonce,
      retry_id: [0, auth.retry++],
      server_nonce: auth.serverNonce
    }, 'Client_DH_Inner_Data')

    const dataWithHash = sha1BytesSync(data.getBuffer()).concat(data.getBytes() as number[])
    const encryptedData = aesEncryptSync(dataWithHash, auth.tmpAesKey, auth.tmpAesIv as number[])
    const request = this.createSerializer({ isMtp: true })
    request.storeMethod('set_client_DH_params', {
      encrypted_data: encryptedData,
      nonce: auth.nonce,
      server_nonce: auth.serverNonce
    })

    this.logger.verbose(() => `mtpSendSetClientDhParams() Send set_client_DH_params`)

    this.sendRequest(auth.dcId, request.getBuffer()).then((deserializer) => {
      const response = deserializer.fetchObject('Set_client_DH_params_answer')

      if (response._ !== 'dh_gen_ok' && response._ !== 'dh_gen_retry' && response._ !== 'dh_gen_fail') {
        deferred.reject(new Error('Set_client_DH_params_answer response invalid: ' + response._))
        return false
      }
      if (!compareBytes(auth.nonce, response.nonce)) {
        deferred.reject(new Error('Set_client_DH_params_answer nonce mismatch'))
        return false
      }
      if (!compareBytes(auth.serverNonce, response.server_nonce)) {
        deferred.reject(new Error('Set_client_DH_params_answer server_nonce mismatch'))
        return false
      }

      const authKey = bytesModPow(auth.gA, auth.b, auth.dhPrime)
      const authKeyHash = sha1BytesSync(authKey)
      const authKeyAux = authKeyHash.slice(0, 8)
      const authKeyID = authKeyHash.slice(-8)

      this.logger.verbose(() => `mtpSendSetClientDhParams() Got Set_client_DH_params_answer ${response._}`)

      switch (response._) {
        case 'dh_gen_ok': {
          const newNonceHash1 = sha1BytesSync((auth.newNonce).concat([1], authKeyAux)).slice(-16)

          if (!compareBytes(newNonceHash1, response.new_nonce_hash1)) {
            deferred.reject(new Error('Set_client_DH_params_answer new_nonce_hash1 mismatch'))
            return false
          }

          const serverSalt = xorBytes(
            (auth.newNonce).slice(0, 8),
            (auth.serverNonce).slice(0, 8)
          )

          auth.authKeyID = authKeyID
          auth.authKey = authKey
          auth.serverSalt = serverSalt

          deferred.resolve(auth)
          break
        }
        case 'dh_gen_retry': {
          const newNonceHash2 = sha1BytesSync((auth.newNonce).concat([2], authKeyAux)).slice(-16)
          if (!compareBytes(newNonceHash2, response.new_nonce_hash2)) {
            deferred.reject(new Error('Set_client_DH_params_answer new_nonce_hash2 mismatch'))
            return false
          }

          return this.sendSetClientDhParams(auth)
        }
        case 'dh_gen_fail': {
          const newNonceHash3 = sha1BytesSync((auth.newNonce).concat([3], authKeyAux)).slice(-16)
          if (!compareBytes(newNonceHash3, response.new_nonce_hash3)) {
            deferred.reject(new Error('Set_client_DH_params_answer new_nonce_hash3 mismatch'))
            return false
          }

          deferred.reject(new Error('Set_client_DH_params_answer fail'))
          return false
        }
      }
    }, (error) => {
      deferred.reject(error)
    })
  }

  private verifyDhParams (g: number, dhPrime: number[], gA: number[]): boolean {
    this.logger.verbose(() => `mtpVerifyDhParams() Verifying DH params`)

    const dhPrimeHex = bytesToHex(dhPrime)
    if (g !== 3 ||
      dhPrimeHex !== 'c71caeb9c6b1c9048e6c522f70f13f73980d40238e3e21c14934d037563d930f48198a0aa7c14058229493d22530f4dbfa336f6e0ac925139543aed44cce7c3720fd51f69458705ac68cd4fe6b6b13abdc9746512969328454f18faf8c595f642477fe96bb2a941d5bcd1d4ac8cc49880708fa9b378e3c4f3a9060bee67cf9a4a4a695811051907e162753b56b0f6b410dba74d8a84b2a14b3144e0ef1284754fd17ed950d5965b4b9dd46582db1178d169c6bc465b0d6ff9ca3928fef5b9ae4e418fc15e83ebea0f87fa9ff5eed70050ded2849f47bf959d956850ce929851f0d8115f635b105ee2e4e15d04b2454bf6f4fadf034b10403119cd8e3b92fcc5b') { // tslint:disable
      // The verified value is from https://core.telegram.org/mtproto/security_guidelines
      throw new Error('DH params are not verified: unknown dhPrime')
    }

    this.logger.verbose(() => `mtpVerifyDhParams() dhPrime cmp OK`)

    const gABigInt = new BigInteger(bytesToHex(gA), 16)
    const dhPrimeBigInt = new BigInteger(dhPrimeHex, 16)

    if (gABigInt.compareTo(BigInteger.ONE) <= 0) {
      throw new Error('DH params are not verified: gA <= 1')
    }

    if (gABigInt.compareTo(dhPrimeBigInt.subtract(BigInteger.ONE)) >= 0) {
      throw new Error('DH params are not verified: gA >= dhPrime - 1')
    }

    this.logger.verbose(() => `mtpVerifyDhParams() 1 < gA < dhPrime-1 OK`)

    const two = new BigInteger(null)
    two.fromInt(2)
    const twoPow = two.pow(2048 - 64)

    if (gABigInt.compareTo(twoPow) < 0) {
      throw new Error('DH params are not verified: gA < 2^{2048-64}')
    }
    if (gABigInt.compareTo(dhPrimeBigInt.subtract(twoPow)) >= 0) {
      throw new Error('DH params are not verified: gA > dhPrime - 2^{2048-64}')
    }

    this.logger.verbose(() => `mtpVerifyDhParams() 2^{2048-64} < gA < dhPrime-2^{2048-64} OK`)

    return true
  }
}
