import { apiFactory, ApiMethods } from './api'
import { compose, Composer, createContext, optional, TdProxy, Updates } from './components'
import * as ag from './types'

const DEFAULT_CONFIG: ag.AirgramConfig = {
  applicationVersion: '0.1.0',
  databaseDirectory: './db',
  databaseEncryptionKey: '',
  deviceModel: 'UNKNOWN DEVICE',
  systemLanguageCode: 'en',
  systemVersion: 'UNKNOWN VERSION'
}

export default class Airgram<ContextT extends ag.Context>
  extends Composer<ContextT> implements ag.Airgram<ContextT> {

  public readonly api: ApiMethods

  public readonly config: ag.AirgramConfig

  public handleError: ag.ErrorHandler

  private _updates: ag.Updates<ContextT>

  private destroyed: boolean = false

  private instances: Record<string, any> = {}

  constructor (config: ag.AirgramConfig) {
    super()

    this.config = { ...DEFAULT_CONFIG, ...config }

    this.handleError = (error: any/*, ctx*/) => {
      // const { code, message, ...details } = error
      // console.error(`[${ctx ? ctx._ : 'undefined'}][${code}]: ${message} ${new Serializable(details)}`)
      throw error
    }

    this.callApi = this.callApi.bind(this)
    this.api = apiFactory(this.callApi)

    setImmediate(() => this.api.getAuthorizationState())
  }

  public get name (): string {
    return this.config.name || 'airgram'
  }

  get client (): ag.TdClient {
    return this.tdProxy.client
  }

  get updates (): ag.Updates<ContextT> {
    if (!this._updates) {
      this._updates = new Updates<ContextT>()
      this.use(this._updates)
    }
    return this._updates
  }

  private get tdProxy (): ag.TdProxy {
    if (!this.instances.tdProxy) {
      this.instances.tdProxy = new TdProxy(this.config.client || null,
        this.config,
        (update) => this.handleUpdate(update),
        (message) => {
          const error = message instanceof Error ? message : new Error(message)
          this.handleError(error, { _: '' })
        }
      )
    }
    return this.instances.tdProxy
  }

  public catch (handler: (error: Error, ctx?: Record<string, any>) => void): void {
    this.handleError = handler
  }

  public async destroy (): Promise<void> {
    if (!this.destroyed) {
      this.destroyed = true
      this.tdProxy.destroy()
    }
  }

  public pause (): void {
    return this.tdProxy.pause()
  }

  public resume (): void {
    return this.tdProxy.resume()
  }

  private apiMiddleware () {
    return optional(
      (ctx: ag.Context) => ctx.request,
      async (ctx, next) => {
        const promise = new Promise((resolve, reject) => {
          return this.tdProxy.send(ctx.request, { _: ctx.request._, resolve, reject })
        })
        return promise
          .then((response) => ctx.response = response)
          .then(next)
      }
    )
  }

  private callApi<ParamsT, ResponseT> (
    method: string,
    params?: ParamsT,
    state?: Record<string, any>
  ): Promise<ResponseT> {
    return new Promise((resolve, reject) => {
      const ctx = this.createContext(method, state || {}, {
        request: {
          method,
          params
        }
      })
      const handler = compose<ag.Context<ParamsT, ResponseT>>([
        this.middleware(),
        this.apiMiddleware()
      ])
      return handler(ctx, async () => resolve(ctx.response))
        .catch((error) => this.handleError(error, ctx))
        .catch(reject)
    })
  }

  private createContext (
    _: string,
    state: Record<string, any>,
    options: Record<string, any>
  ): ContextT {
    const contextFn = 'createContext' in this.config ? this.config.createContext! : createContext
    return contextFn(Object.assign({}, options, {
      _,
      airgram: this,
      state
    })) as ContextT
  }

  private handleUpdate (update: ag.TdUpdate): Promise<any> {
    const ctx: ContextT = this.createContext(update._, {}, { update })
    return this.middleware()(ctx).catch((error) => this.handleError(error, ctx))
  }
}
