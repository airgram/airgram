import { Composer } from './components'
import {
  ApiMethods,
  ApiRequest,
  ApiRequestOptions,
  ApiResponse,
  BaseTdObject,
  Config,
  Context,
  ContextState,
  Deferred,
  ErrorHandler,
  ErrorUnion,
  GetStateFn,
  Instance,
  Middleware,
  MiddlewareFn,
  MiddlewareOn,
  SetStateFn,
  TdLibConfig,
  TdObject,
  TdProvider,
  UpdateAuthorizationState,
  UpdateContext
} from './types'
import { createDeferred, pick } from './utils'

const getDefaultConfig = (): Partial<Config> => ({
  applicationVersion: '0.1.0',
  databaseDirectory: './db',
  databaseEncryptionKey: '',
  deviceModel: 'UNKNOWN DEVICE',
  logVerbosityLevel: 2,
  systemLanguageCode: 'en',
  systemVersion: 'UNKNOWN VERSION'
})

const tdlibOptions: (keyof TdLibConfig)[] = [
  'useTestDc',
  'databaseDirectory',
  'filesDirectory',
  'useFileDatabase',
  'useChatInfoDatabase',
  'useMessageDatabase',
  'useSecretChats',
  'apiId',
  'apiHash',
  'systemLanguageCode',
  'deviceModel',
  'systemVersion',
  'applicationVersion',
  'enableStorageOptimizer',
  'ignoreFileNames'
]

function createState (starting: Record<string, unknown>): ContextState {
  let state = { ...starting }
  const getState: GetStateFn = () => ({ ...state })
  const setState: SetStateFn = (next: Record<string, unknown> | ((state: Record<string, unknown>) => Record<string, unknown>)) => {
    if (typeof next === 'function') {
      state = { ...state, ...next(state) }
    } else {
      state = { ...state, ...next }
    }
  }
  return { getState, setState }
}

function defineContextProperty (
  ctx: Record<string, unknown>,
  name: string,
  value: (() => any) | unknown
): void {
  const descriptor: PropertyDescriptor = {
    enumerable: true,
    configurable: false
  }
  if (typeof value === 'function') {
    descriptor.get = function () {
      return value()
    }
  } else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    descriptor.value = value
    descriptor.writable = false
  } else {
    descriptor.get = function () {
      return value
    }
  }
  Object.defineProperty(ctx, name, descriptor)
}

function isUnwrapped<T> (o: any): o is T {
  return typeof o !== 'function'
}

function isWrapped<T> (o: any): o is T {
  return typeof o === 'function'
}

export class Airgram<ProviderT extends TdProvider> implements Instance<ProviderT> {
  public readonly config: Config<ProviderT>

  public handleError: ErrorHandler

  public readonly provider: ProviderT

  public readonly api: ApiMethods

  public readonly on: MiddlewareOn = (
    predicateTypes: string | string[],
    ...fns: Middleware<any>[]
  ): void => {
    this.composer.on(predicateTypes, ...fns)
  }

  private readonly composer: Composer<Context>

  public constructor (config: Config<ProviderT>) {
    this.config = { ...getDefaultConfig(), ...config }
    this.composer = new Composer()

    const { provider } = this.config
    if (!provider || typeof provider.initialize !== 'function') {
      throw new Error('The `provider` option is required.')
    }
    provider.initialize(
      (update) => this.handleUpdate(update),
      (message: Error | string) => {
        const error = message instanceof Error ? message : new Error(message)
        this.handleError(error)
      },
      this.config.models
    )
    this.provider = provider
    this.handleError = (error: Error): void => {
      throw error
    }

    this.callApi = this.callApi.bind(this)
    this.emit = this.emit.bind(this)
    this.api = new Proxy<ApiMethods>({} as any, {
      get: (_target: Record<string, any>, method: string) => {
        if (method === 'toJSON') {
          return '{}'
        }
        return (params: TdObject | undefined, options?: ApiRequestOptions): Promise<ApiResponse<unknown, TdObject>> =>
          this.callApi({ method, params }, options)
      }
    })

    if (this.config.logVerbosityLevel !== undefined) {
      this.api
        .setLogVerbosityLevel({
          newVerbosityLevel: this.config.logVerbosityLevel
        })
        .catch(this.handleError)
    }

    this.bootstrapMiddleware()
    setTimeout(() => this.api.getAuthorizationState(), 0)
  }

  public get name (): string {
    return this.config.name || 'airgram'
  }

  public catch (handler: (error: Error) => void): void {
    this.handleError = handler
  }

  public destroy (): Promise<void> {
    return this.provider.destroy()
  }

  public emit<UpdateT extends BaseTdObject = TdObject> (
    update: UpdateT, state?: Record<string, unknown>): Promise<unknown> {
    return this.handleUpdate(update, state || {})
  }

  public use (
    ...fns: Middleware<Context>[]
  ): void {
    this.composer.use(...fns)
  }

  private apiMiddleware (): MiddlewareFn<ApiResponse<TdObject | undefined, TdObject>> {
    return Composer.optional(
      (ctx: Record<string, unknown>): boolean => !!ctx.request,
      async (ctx: ApiResponse<TdObject | undefined, TdObject>, next: () => any): Promise<MiddlewareFn> =>
        this.provider.send(ctx.request)
          .then((response: TdObject | ErrorUnion): unknown => (ctx.response = response))
          .then(next)
    )
  }

  private bootstrapMiddleware (): void {
    let deferred: Deferred | null = createDeferred()
    this.use(async (ctx, next) => {
      if (!deferred) {
        return next()
      }
      if ('update' in ctx && ctx.update) {
        if (ctx._ === 'updateAuthorizationState') {
          const update = (ctx.update as unknown) as UpdateAuthorizationState
          switch (update.authorizationState._) {
            case 'authorizationStateWaitTdlibParameters': {
              this.api.setTdlibParameters({
                parameters: { _: 'tdlibParameters', ...pick(this.config, tdlibOptions) }
              }).catch(this.handleError)
              break
            }
            case 'authorizationStateWaitEncryptionKey': {
              this.api.checkDatabaseEncryptionKey({
                encryptionKey: this.config.databaseEncryptionKey
              }).catch(this.handleError)
              break
            }
            default: {
              setTimeout(() => {
                if (deferred) {
                  deferred.resolve()
                  deferred = null
                }
              }, 0)
            }
          }
        }
        return next()
      } else if (['setTdlibParameters', 'checkDatabaseEncryptionKey'].includes(ctx._)) {
        return next()
      }
      return deferred.promise.then(next)
    })
  }

  private callApi<ParamsT extends TdObject | undefined, ResultT extends TdObject> (
    request: ApiRequest<ParamsT>,
    options?: ApiRequestOptions
  ): Promise<ApiResponse<ParamsT, ResultT>> {
    return this.createContext <ApiResponse<ParamsT, ResultT>>(
      request.method,
      (options && options.state) || {},
      { request }
    ).then((ctx) => new Promise<any>((resolve, reject) => {
      const handler = Composer.compose([this.composer.middleware(), this.apiMiddleware()])
      return handler(ctx, async (): Promise<any> => resolve(ctx)).catch(reject)
    }))
    // return new Promise<any>((resolve, reject) => {
    //   const handler = Composer.compose([this.composer.middleware(), this.apiMiddleware()])
    //   return handler(ctx, async (): Promise<any> => resolve(ctx)).catch(reject)
    // })// .catch((error) => this.handleError(error, ctx))
  }

  private async createContext<T> (
    _: string,
    state: Record<string, unknown>,
    props: Record<string, unknown>
  ): Promise<T> {
    const ctx: Record<string, any> = createState(state)
    defineContextProperty(ctx, '_', _)
    defineContextProperty(ctx, 'airgram', this)

    Object.keys(props).forEach((name) => {
      defineContextProperty(ctx, name, props[name])
    })

    const extraContext = await this.getExtraContext(ctx)
    Object.keys(extraContext).forEach((name) => {
      defineContextProperty(ctx, name, extraContext[name])
    })
    return ctx as T
  }

  private async getExtraContext (ctx: Record<string, unknown>): Promise<Record<string, any>> {
    const { context } = this.config
    if (context) {
      if (isUnwrapped<ApiResponse<unknown, TdObject> | UpdateContext<TdObject>>(context)) {
        return context
      }
      if (isWrapped<(ctx: Record<string, unknown>) => Record<string, any>>(context)) {
        return context(ctx)
      }
    }
    return {}
  }

  private handleUpdate (update: BaseTdObject, state: Record<string, any> = {}): Promise<unknown> {
    return this.createContext<UpdateContext<TdObject>>(update._, state, { update })
      .then((ctx) => this.composer.middleware()(ctx, Composer.noop))
  }
}
