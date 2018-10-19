import { inject } from 'inversify'
import { provide } from 'inversify-binding-decorators'
import * as api from '../api'
import RpcError from '../errors/RpcError'
import { now } from '../helpers'
import { MtpClient } from '../interfaces/airgram'
import { ag } from '../interfaces/index'
import TYPES from '../ioc/types'

let requestId = 0

@provide(TYPES.MtpRequest)
export default class MtpRequest<ParamsT, ResponseT> implements ag.MtpRequest<ParamsT, ResponseT> {
  public static DEFAULT_OPTIONS: ag.MtpRequestOptions = {
    isFileTransfer: false,
    mtp: {},
    resendDelay: undefined,
    timeout: 30,
    waitUntil: undefined
  }

  public static factory (createInstance: <T, U>() => ag.MtpRequest<T, U>, client: ag.Client) {
    return <T, U> (method: string, params?: T, options?: ag.MtpRequestOptions) => {
      const instance = createInstance<T, U>()
      instance.configure(client, method, params, options)
      return instance
    }
  }

  public client: ag.Client
  public method: string
  public options: ag.MtpRequestOptions = MtpRequest.DEFAULT_OPTIONS
  public params?: ParamsT
  protected mtpClient: MtpClient
  protected promise: Promise<ResponseT>
  protected reject: (error: Error) => any
  protected resolve: (response: ResponseT) => any

  constructor (@inject(TYPES.Logger) public logger: ag.Logger) {
    this.logger.namespace.push(String(++requestId))
  }

  public configure (client: ag.Client, method: string, params?: ParamsT, options?: ag.MtpRequestOptions) {
    this.client = client
    this.method = method
    this.params = params
    this.options = { ...this.options, ...(options || {}) }
  }

  public send (dcId: number, options?: ag.MtpClientOptions): Promise<ResponseT> {
    if (!this.promise) {
      this.promise = new Promise<ResponseT>(async (resolve, reject) => {
        this.logger.info(() => `request() dc "${dcId}" "${this.method}" ` +
          `${JSON.stringify(this.params, null, 1)} ${JSON.stringify(this.options)}`)

        this.resolve = resolve
        this.reject = reject

        this.client.getMtpClient(dcId, this.options).then((mtpClient) => {
          this.mtpClient = mtpClient
        }).then(() => this.execute())
          .catch((error) => this.reject(error))
      })
    }
    return this.promise
  }

  protected execute () {
    this.logger.debug(() => `execute() start`)

    return this.mtpClient.callApi<ParamsT, ResponseT>(this.method, this.params, this.options.mtp)
      .then((result) => {
        this.logger.info(() => `execute() response: ${JSON.stringify(result)}`)
        return this.resolve(result)
      })
      .catch((error) => this.handleError(error))
  }

  protected exportAuthorization (dcId: number, prevDcId: number): Promise<ResponseT> {
    this.logger.verbose(`exportAuthorization() from "${prevDcId}" to "${dcId}"`)
    return this.client.createRequest<api.auth.ExportAuthorizationParams, api.AuthExportedAuthorizationUnion>(
      'auth.exportAuthorization',
      { dc_id: dcId }
    ).send(prevDcId).then((exportedAuth) =>
      this.client.createRequest<api.auth.ImportAuthorizationParams, api.AuthAuthorizationUnion>(
        'auth.importAuthorization',
        { id: exportedAuth.id, bytes: exportedAuth.bytes }
      ).send(dcId))
      .then(() => this.resend(dcId))
      .then(this.resolve)
      .catch(this.reject)
  }

  protected async handleError (error) {
    const { dcId } = this.mtpClient
    const prevDcId = await this.client.mtpState.prevDcId()

    this.logger.error(() => `handleError() ${error.message}`)

    if (!(error instanceof RpcError)) {
      return this.reject(error)
    }

    // Forbidden
    if (error.code === 401 && (!prevDcId || (dcId === prevDcId))) {
      return this.reject(error)
    }

    // DC migrated
    if (error.code === 401 && prevDcId && dcId !== prevDcId) {
      this.logger.error(() => `handleError() dc migrated from "${prevDcId}" to "${dcId}"`)
      return this.exportAuthorization(dcId, prevDcId)
    }
    if (error.code === 303) {
      const newDcId = Number(
        error.type.match(/^(PHONE_MIGRATE_|NETWORK_MIGRATE_|USER_MIGRATE_|FILE_MIGRATE_)(\d+)/)[2]
      )
      if (newDcId !== dcId) {
        this.logger.verbose(() => `handleError() resend to new dc "${newDcId}"`)
        await this.client.mtpState.prevDcId(dcId)
        await this.client.mtpState.currentDcId(newDcId)
        return this.resend(newDcId)
      }
      return this.reject(error)
    }

    // Flood error
    if (error.code === 420) {
      const delay = error.type.match(/^FLOOD_WAIT_(\d+)/)[1] || 10
      if (delay > (this.options.timeout || 30)) {
        return this.reject(error)
      }

      this.logger.error(() => `handleError() flood detected, wait for "${delay}" seconds`)

      return new Promise<ResponseT>((resolve, reject) => {
        setTimeout(() => {
          this.execute().then(resolve).catch(reject)
        }, delay * 1000)
      })
    }

    // Other errors
    if (error.code === 500 || error.type.toString() === 'MSG_WAIT_FAILED') {
      const time = now()
      if (this.options.waitUntil) {
        if (time >= this.options.waitUntil) {
          return this.reject(error)
        }
      } else {
        this.options.waitUntil = time + (this.options.timeout !== undefined ? this.options.timeout : 10) * 1000
      }
      this.options.resendDelay = this.options.resendDelay ? Math.min(60, this.options.resendDelay * 1.5) : 1

      this.logger.verbose(`handleError() ${error.message}`)
      this.logger.verbose(`handleError() execution delay: "${this.options.resendDelay}" seconds`)

      return new Promise((resolve) => {
        setTimeout(() => {
          this.execute().then(resolve).catch(this.handleError)
        }, this.options.resendDelay! * 1000)
      })
    }

    return this.reject(error)
  }

  protected resend (dcId: number): Promise<ResponseT> {
    this.logger.verbose(`resend()`)
    return this.client.createRequest<ParamsT, ResponseT>(
      this.method,
      this.params,
      this.options
    ).send(dcId)
      .then(this.resolve)
      .catch(this.reject)
  }
}
