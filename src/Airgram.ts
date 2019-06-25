import { apiFactory, ApiMethods } from 'airgram-api'
import { compose, Composer, createContext, optional, Updates } from './components'
import * as ag from './types/airgram'

const DEFAULT_CONFIG: Partial<ag.AirgramConfig<any>> = {
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

  public readonly config: ag.AirgramConfig<ContextT>

  public handleError: ag.ErrorHandler

  private _createContext?: (options: ag.ContextOptions) => ContextT

  private _updates: ag.Updates<ContextT>

  private provider: ag.TdProvider<any>

  constructor (config: ag.AirgramConfig<ContextT>) {
    super()

    this.config = { ...DEFAULT_CONFIG, ...config }

    const { provider } = this.config
    if (!provider || typeof (provider as any).initialize !== 'function') {
      throw new Error('The `provider` option is required.' +
        'See: https://github.com/airgram/airgram/blob/master/README.md#providers')
    }
    provider.initialize(
      (update) => this.handleUpdate(update),
      (message) => {
        const error = message instanceof Error ? message : new Error(message)
        this.handleError(error, { _: '' })
      },
      this.config.models
    )
    this.provider = provider

    this.handleError = (error: any/*, ctx*/) => {
      // const { code, message, ...details } = error
      // console.error(`[${ctx ? ctx._ : 'undefined'}][${code}]: ${message} ${new Serializable(details)}`)
      throw error
    }

    this.callApi = this.callApi.bind(this)
    this.api = apiFactory(this.callApi)

    setTimeout(() => this.api.getAuthorizationState(), 0)
  }

  public get name (): string {
    return this.config.name || 'airgram'
  }

  get updates (): ag.Updates<ContextT> {
    if (!this._updates) {
      this._updates = new Updates<ContextT>()
      this.use(this._updates)
    }
    return this._updates
  }

  public catch (handler: (error: Error, ctx?: Record<string, any>) => void): void {
    this.handleError = handler
  }

  public emit (update: ag.TdUpdate): Promise<any> {
    return this.handleUpdate(update)
  }

  private apiMiddleware () {
    return optional(
      (ctx: ag.Context) => ctx.request,
      async (ctx, next) => this.provider.send(ctx.request)
        .then((response) => ctx.response = response)
        .then(next)
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
    if (this.config.contextFactory && !this._createContext) {
      this._createContext = this.config.contextFactory(this)
    }
    const contextFn = this._createContext || createContext
    return contextFn(Object.assign({}, options, {
      _,
      airgram: this,
      state
    })) as ContextT
  }

  private handleUpdate (update: Record<string, any>): Promise<any> {
    const ctx: ContextT = this.createContext(update._, {}, { update })
    return this.middleware()(ctx).catch((error) => this.handleError(error, ctx))
  }
}
