import { inject } from 'inversify'
import { provide } from 'inversify-binding-decorators'
import * as api from '../api'
import RpcError from '../errors/RpcError'
import Serializable from '../errors/Serializable'
import { bytesToHex, hexToBytes } from '../helpers'
import { ag } from '../interfaces/index'
import TYPES from '../ioc/types'
import Composer from './Composer'

const { optional, compose } = Composer

@provide(TYPES.Client)
export default class Client extends Composer<ag.Context> implements ag.Client {
  public static factory (createInstance: () => ag.Client, config: ag.Config) {
    const instance = createInstance()
    Object.assign(instance, { _config: config })
    return instance
  }

  public readonly createRequest: ag.MtpRequestCreator
  public handleError: (error: Error, ctx?: { _: string, [key: string]: any }) => any
  public me: ag.Me = {
    id: undefined
  }
  public readonly mtpState: ag.MtpState
  public readonly timeManager: ag.MtpTimeManager
  protected createClient: (options: ag.MtpClientOptions) => ag.MtpClient
  protected readonly mtpAuth: ag.MtpAuthorizer
  private _config: ag.Config
  private clients: ag.MtpClients = {}
  private uploadClients: ag.MtpClients = {}

  constructor (
    @inject(TYPES.Logger) public logger: ag.Logger,
    @inject(TYPES.ApiFactory) protected apiFactory: ag.ApiFactory,
    @inject(TYPES.MtpStateFactory) mtpStateFactory: (client: ag.Client)
      => ag.MtpState,
    @inject(TYPES.MtpTimeManagerFactory) mtpTimeManagerFactory: (client: ag.Client) => ag.MtpTimeManager,
    @inject(TYPES.MtpAuthorizerFactory) mtpAuthFactory: (client: ag.Client) => ag.MtpAuthorizer,
    @inject(TYPES.MtpClientFactory) mtpClientFactory: (client: ag.Client)
      => (options: ag.MtpClientOptions) => ag.MtpClient,
    @inject(TYPES.MtpRequestFactory) mtpRequestFactory: <ParamsT, ResponseT>(client: ag.Client)
      => (method: string, params?: ParamsT)
      => ag.MtpRequest<ParamsT, ResponseT>,
    @inject(TYPES.AuthStore) protected authStore: ag.Store<ag.AuthDoc>
  ) {
    super()

    this.mtpState = mtpStateFactory(this)
    this.timeManager = mtpTimeManagerFactory(this)
    this.mtpAuth = mtpAuthFactory(this)
    this.createClient = mtpClientFactory(this)
    this.createRequest = mtpRequestFactory(this)

    this.handleError = (error: any, ctx) => {
      const errorData: any = error instanceof RpcError ? {
        message: `"${error.message}" ${error.original ? `"${error.original.message}"` : ''}`,
        stack: error.stack
      } : error
      const { message, ...details } = errorData
      this.logger.error(`[${ctx ? ctx._ : 'undefined'}]: ${message} ${new Serializable(details)}`)
      throw error
    }

    this.callApi = this.callApi.bind(this)
  }

  get account (): api.account.AccountApi {
    return this.apiFactory <api.account.AccountApi>('account', this.callApi)
  }

  get auth (): api.auth.AuthApi {
    return this.apiFactory <api.auth.AuthApi>('auth', this.callApi)
  }

  get bots (): api.bots.BotsApi {
    return this.apiFactory <api.bots.BotsApi>('bots', this.callApi)
  }

  get channels (): api.channels.ChannelsApi {
    return this.apiFactory <api.channels.ChannelsApi>('channels', this.callApi)
  }

  get config (): ag.Config {
    return this._config
  }

  get contacts (): api.contacts.ContactsApi {
    return this.apiFactory <api.contacts.ContactsApi>('contacts', this.callApi)
  }

  get help (): api.help.HelpApi {
    return this.apiFactory <api.help.HelpApi>('help', this.callApi)
  }

  get langpack (): api.langpack.LangpackApi {
    return this.apiFactory <api.langpack.LangpackApi>('langpack', this.callApi)
  }

  get messages (): api.messages.MessagesApi {
    return this.apiFactory <api.messages.MessagesApi>('messages', this.callApi)
  }

  get payments (): api.payments.PaymentsApi {
    return this.apiFactory <api.payments.PaymentsApi>('payments', this.callApi)
  }

  get phone (): api.phone.PhoneApi {
    return this.apiFactory <api.phone.PhoneApi>('phone', this.callApi)
  }

  get photos (): api.photos.PhotosApi {
    return this.apiFactory <api.photos.PhotosApi>('photos', this.callApi)
  }

  get stickers (): api.stickers.StickersApi {
    return this.apiFactory <api.stickers.StickersApi>('stickers', this.callApi)
  }

  get updates (): api.updates.UpdatesApi {
    return this.apiFactory <api.updates.UpdatesApi>('updates', this.callApi)
  }

  get upload (): api.upload.UploadApi {
    return this.apiFactory <api.upload.UploadApi>('upload', this.callApi)
  }

  get users (): api.users.UsersApi {
    return this.apiFactory <api.users.UsersApi>('users', this.callApi)
  }

  public apiMiddleware () {
    return optional(
      (ctx) => !ctx.handled,
      async (ctx, next) => {
        const { method, params, options } = ctx.request
        ctx.handled = true
        return this.createRequest(method, params, options)
          .send(await this.mtpState.currentDcId())
          .then((response) => ctx.response = response)
          .then(next)
      }
    )
  }

  public callApi<ParamsT, ResponseT> (
    method: string,
    params?: ParamsT,
    options?: ag.MtpRequestOptions
  ): Promise<ResponseT> {

    this.logger.info(`callApi() "${method}" ${JSON.stringify(params)}`)

    return new Promise((resolve, reject) => {
      const ctx: ag.Context<ParamsT, ResponseT> = this.createContext(method, {
        // deferred: {
        //   reject,
        //   resolve
        // },
        request: {
          method,
          options,
          params
        }
      })
      const handler = compose<ag.Context<ParamsT, ResponseT>>([
        this.middleware(),
        this.apiMiddleware()
      ])
      const handlerPromise = handler(ctx, async () => resolve(ctx.response))
      const timeout = (options && 'timeout' in options) ? options.timeout : 300000
      const promise = timeout ? Promise.race<ResponseT>([
        handlerPromise,
        new Promise(() => setTimeout(() => reject(new Error('Request timeout exceeded.')), timeout))
      ]) : handlerPromise

      return promise
        .catch((error) => this.handleError(error, ctx))
        .catch(reject)
    })
  }

  public catch (handler: (error: Error) => void): ag.Client {
    this.handleError = handler
    return this
  }

  public async destroy (): Promise<void> {
    await Promise.all(Object.values(this.clients).map(async (client) => (await client).destroy()))
    await Promise.all(Object.values(this.uploadClients).map(async (client) => (await client).destroy()))
    this.clients = {}
    this.uploadClients = {}
  }

  public getApiUrl (dcId): string {
    const dcConfig = this.config.dcOptions.filter((dc: any) => !dc.pFlags.ipv6)
    const dcOption = dcConfig.find((dc) => dc.id === dcId)

    if (!dcOption) {
      throw new Error(`Could not find dc with id = ${dcId}`)
    }

    return `http://${dcOption.ip_address}:${dcOption.port}/${this.config.modes.test ? 'apiw_test1' : 'apiw1'}`
  }

  public getMtpClient (dcId, options?: ag.MtpClientGetterOptions): Promise<ag.MtpClient> {
    if (!dcId) {
      return Promise.reject(new Error(`[apiManager] getClient() please specify dcId`))
    }

    const { isFileTransfer = false, createClient = false } = (options || {})
    const cache = isFileTransfer ? this.uploadClients : this.clients

    if (!cache[dcId]) {
      cache[dcId] = this.extractAuthorization(dcId, isFileTransfer, createClient)
        .then(async (client) => client || this.authorize(dcId, isFileTransfer))
    }

    return cache[dcId]
  }

  public handleUpdates (updates: ag.UpdatesResponse) {
    const ctx: ag.Context<void, ag.UpdatesResponse> = this.createContext(updates._, {
      updates
    })
    return this.middleware()(ctx).catch((error) => this.handleError(error, ctx))
  }

  public setConfig (config: ag.Config) {
    this._config = config
    return this
  }

  public async startPolling (): Promise<void> {
    return this.getMtpClient(await this.mtpState.currentDcId(), { createClient: true })
      .then((client: ag.MtpClient) => client.startPolling())
      .catch((error) => this.handleError(error, { _: 'startPolling' }))
  }

  public async stop (): Promise<void> {
    return this.getMtpClient(await this.mtpState.currentDcId())
      .then((client: ag.MtpClient) => {
        client.stop()
      })
      .catch((error) => this.handleError(error, { _: 'stop' }))
  }

  protected authorize (dcId: number, isFileTransfer: boolean): Promise<ag.MtpClient> {
    return this.mtpAuth.auth(dcId)
      .then(({ authKey, serverSalt }) => this.mtpState.dc(dcId, {
        authKey: bytesToHex(authKey),
        serverSalt: bytesToHex(serverSalt)
      }).then(() => this.createClient({
        authKey,
        dcId,
        isFileTransfer,
        serverSalt
      })))
  }

  protected async extractAuthorization (
    dcId: number,
    isFileTransfer: boolean,
    createClient: boolean
  ): Promise<ag.MtpClient> {
    return new Promise<ag.MtpClient>(async (resolve, reject) => {
      const dcState: ag.MtpStateDc = await this.mtpState.dc(dcId) // ||  { dcId, authKey: '', serverSalt: '' }
      if (dcState) {
        if (dcState.authKey && dcState.authKey.length === 512) {
          if (!dcState.serverSalt || dcState.serverSalt.length !== 16) {
            dcState.serverSalt = 'AAAAAAAAAAAAAAAA'
          }
          const clientOptions: ag.MtpClientOptions = {
            authKey: hexToBytes(dcState.authKey),
            dcId,
            isFileTransfer,
            serverSalt: hexToBytes(dcState.serverSalt)
          }

          resolve(this.createClient(clientOptions))
        } else if (!createClient) {
          reject(new RpcError({ type: 'AUTH_KEY_EMPTY', code: 401 }))
        }
      }
      resolve(undefined)
    })
  }

  private createContext (_: string, options: Partial<ag.Context>): ag.Context {
    return {
      _,
      client: this,
      handled: false,
      state: {},
      ...options
    }
  }
}
