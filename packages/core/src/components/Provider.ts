import { ApiRequest, TdObject, TdProvider as BaseTdProvider } from '../types'

export abstract class Provider implements BaseTdProvider {
  public abstract destroy (): Promise<void>

  public abstract execute (request: ApiRequest): TdObject

  public abstract send (request: ApiRequest): Promise<TdObject>
}
