import {
  ApiRequest,
  PlainObjectToModelTransformer,
  TdObject,
  TdProvider as BaseTdProvider,
  UpdateAuthorizationState
} from '@airgram/core'
import { TdClient, TdClientConfig } from './TdClient'

export type TdProviderConfig = Omit<TdClientConfig, 'handleUpdate' | 'handleError' | 'models'>

export class TdProvider extends BaseTdProvider {
  private client: TdClient | null = null

  private readonly config: TdProviderConfig

  private waitForDestroy: ((value?: any) => any) | null = null

  public constructor (config: TdProviderConfig = {}) {
    super()
    this.config = config
  }

  public async destroy (): Promise<void> {
    return new Promise((resolve) => {
      if (!this.client) {
        return resolve()
      }
      this.waitForDestroy = resolve
      this.client.send({ method: 'close', params: {} })
    })
  }

  public execute (request: ApiRequest): TdObject {
    if (!this.client) {
      throw new Error('TdJsonClient is not initialized.')
    }
    return this.client.execute(request)
  }

  public initialize (
    handleUpdate: (update: TdObject) => Promise<unknown>,
    handleError: (error: Error | string) => void,
    models?: PlainObjectToModelTransformer
  ): void {
    const onUpdate = (update: TdObject): any => {
      if (this.waitForDestroy && update._ === 'updateAuthorizationState' &&
        (update as any as UpdateAuthorizationState).authorizationState._ === 'authorizationStateClosed') {
        if (this.client) {
          this.client.destroy()
        }
        return this.waitForDestroy()
      }
      return handleUpdate(update)
    }
    this.client = new TdClient({ ...this.config, handleUpdate: onUpdate, handleError, models })
  }

  // noinspection JSUnusedGlobalSymbols
  public pause (): void {
    if (this.client) {
      this.client.pause()
    }
  }

  // noinspection JSUnusedGlobalSymbols
  public resume (): void {
    if (this.client) {
      this.client.resume()
    }
  }

  public send (request: ApiRequest): Promise<TdObject> {
    if (!this.client) {
      throw new Error('TdJsonClient is not initialized.')
    }
    return this.client.send(request)
  }
}
