import * as ag from '../types/airgram'

export abstract class TdProvider<ClientT = any> implements ag.TdProvider<ClientT> {
  private _client: ClientT

  get client (): ClientT {
    if (!this._client) {
      throw new Error('Client is not initialized.')
    }
    return this._client
  }

  set client (instance: ClientT) {
    this._client = instance
  }

  public abstract send (request: ag.ApiRequest): Promise<ag.TdResponse>

  public abstract initialize (
    handleUpdate: (update: Record<string, any>) => Promise<any>,
    handleError: (error: any) => void,
    models: ag.PlainObjectToModelTransformer
  ): void
}
