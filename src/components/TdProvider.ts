import * as ag from '../types/airgram'

export default abstract class TdProvider<ClientT = any> implements ag.TdProvider<ClientT> {
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
    handleUpdate: (update: ag.TdUpdate) => Promise<any>,
    handleError: (error: any) => void,
    models: Record<string, ag.ClassType<any>>
  ): void
}
