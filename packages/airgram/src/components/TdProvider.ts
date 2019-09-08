import { ApiRequest, PlainObjectToModelTransformer, TdObject, TdProvider as BaseTdProvider } from '@airgram/core'
import { TdClient, TdClientConfig } from './TdClient'

export type TdProviderConfig = Omit<TdClientConfig, 'handleUpdate' | 'handleError' | 'models'>

export class TdProvider extends BaseTdProvider {
  private client: TdClient | null = null

  private readonly config: TdProviderConfig

  public constructor (config: TdProviderConfig = {}) {
    super()
    this.config = config
  }

  // noinspection JSUnusedGlobalSymbols
  public destroy (): void {
    if (this.client) {
      this.client.destroy()
    }
  }

  public initialize (
    handleUpdate: (update: TdObject) => Promise<unknown>,
    handleError: (error: Error | string) => void,
    models?: PlainObjectToModelTransformer
  ): void {
    this.client = new TdClient({ ...this.config, handleUpdate, handleError, models })
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
