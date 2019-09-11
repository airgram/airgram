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

const getDefaultConfig = <T> (): Partial<Config<T>> => ({
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

export function isUnwrapped<T> (o: any): o is T {
  return typeof o !== 'function'
}

export class Airgram<ContextT, ProviderT extends TdProvider> implements Instance<ContextT, ProviderT> {
  public readonly config: Config<ContextT, ProviderT>

  public handleError: ErrorHandler

  public readonly provider: ProviderT

  public readonly api: ApiMethods<ContextT>

  public readonly on: MiddlewareOn<ContextT> = (
    predicateTypes: string | string[],
    ...fns: Middleware<any>[]
  ): void => {
    this.composer.on(predicateTypes, ...fns)
  }

  private readonly composer: Composer<Context<ContextT>>

  public constructor (config: Config<ContextT, ProviderT>) {
    this.config = { ...getDefaultConfig<ContextT>(), ...config }
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
    this.api = new Proxy<ApiMethods<ContextT>>({} as any, {
      get: (_target, method: string) => {
        return (params: unknown, options?: ApiRequestOptions): Promise<ApiResponse<unknown, TdObject>> =>
          this.callApi({ method, params }, options)
      }
    })

    if (this.config.logVerbosityLevel) {
      this.api
        .setLogVerbosityLevel({
          newVerbosityLevel: this.config.logVerbosityLevel
        })
        .catch((error: Error): never => {
          throw error
        })
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

  public emit (update: TdObject): Promise<unknown> {
    return this.handleUpdate(update)
  }

  public use (
    ...fns: Middleware<Context<ContextT>>[]
  ): void {
    this.composer.use(...fns)
  }

  private apiMiddleware (): MiddlewareFn<ApiResponse<unknown, TdObject> & ContextT> {
    return Composer.optional(
      (ctx: Record<string, unknown>): boolean => !!ctx.request,
      async (ctx: ApiResponse<unknown, TdObject>, next: () => any): Promise<MiddlewareFn<ContextT>> =>
        this.provider
          .send(ctx.request)
          .then((response: TdObject): unknown => (ctx.response = response))
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
              await this.api.setTdlibParameters({
                parameters: { _: 'tdlibParameters', ...pick(this.config, tdlibOptions) }
              })
              break
            }
            case 'authorizationStateWaitEncryptionKey': {
              await this.api.checkDatabaseEncryptionKey({
                encryptionKey: this.config.databaseEncryptionKey
              })
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

  private callApi<ParamsT, ResultT extends TdObject> (
    request: ApiRequest<ParamsT>,
    options?: ApiRequestOptions
  ): Promise<ApiResponse<ParamsT, ResultT> & ContextT> {
    const ctx = this.createContext <ApiResponse<ParamsT, ResultT>>(
      request.method,
      (options && options.state) || {},
      { request }
    )
    return new Promise<any>((resolve, reject) => {
      const handler = Composer.compose([this.composer.middleware(), this.apiMiddleware()])
      return handler(ctx, async (): Promise<any> => resolve(ctx)).catch(reject)
    })// .catch((error) => this.handleError(error, ctx))
  }

  private createContext<T> (
    _: string,
    state: Record<string, unknown>,
    extraParams: Record<string, unknown>
  ): T & ContextT {
    const ctx: Record<string, unknown> = {}
    defineContextProperty(ctx, '_', _)
    defineContextProperty(ctx, 'airgram', this)
    defineContextProperty(ctx, 'state', createState(state))

    Object.keys(extraParams).forEach((name) => {
      defineContextProperty(ctx, name, extraParams[name])
    })

    const { context } = this.config
    if (context) {
      const customParams: Record<string, any> = isUnwrapped<ContextT>(context) ? context : context(ctx as any)
      Object.keys(customParams).forEach((name) => {
        defineContextProperty(ctx, name, customParams[name])
      })
    }
    return ctx as T & ContextT
  }

  private handleUpdate (update: BaseTdObject): Promise<unknown> {
    const ctx = this.createContext<UpdateContext<TdObject>>(update._, {}, { update })
    return this.composer
      .middleware()(ctx, Composer.noop)
    // .catch((error: Error) => this.handleError(error, ctx))
  }
}
