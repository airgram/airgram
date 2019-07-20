import { Airgram, TdProvider } from '@airgram/core'
import { TdJsonClient, TdJsonClientConfig } from './TdJsonClient'

export type TdJsonProviderConfig = Airgram.Omit<TdJsonClientConfig, 'handleUpdate' | 'handleError' | 'models'>

export class TdJsonProvider extends TdProvider<TdJsonClient> {
  public constructor (private config: TdJsonProviderConfig = {}) {
    super()
  }

  public destroy (): void {
    if (this.client) {
      this.client.destroy()
    }
  }

  public initialize (
    handleUpdate: (update: Airgram.TdUpdate) => Promise<any>,
    handleError: (error: any) => void,
    models?: Airgram.PlainObjectToModelTransformer
  ): void {
    this.client = new TdJsonClient({ ...this.config, handleUpdate, handleError, models })
  }

  public pause (): void {
    if (this.client) {
      this.client.pause()
    }
  }

  public resume (): void {
    if (this.client) {
      this.client.resume()
    }
  }

  public send (request: Airgram.ApiRequest): Promise<Airgram.TdResponse> {
    if (!this.client) {
      throw new Error('TdJsonClient is not initialized.')
    }
    return this.client.send(request)
  }
}
