import { ApiRequest, PlainObjectToModelTransformer, TdObject, TdProvider as BaseTdProvider } from '../types'

export abstract class TdProvider implements BaseTdProvider {
  public abstract initialize (
    handleUpdate: (update: TdObject) => Promise<unknown>,
    handleError: (error: Error | string) => void,
    models?: PlainObjectToModelTransformer
  ): void

  public abstract send (request: ApiRequest): Promise<TdObject>

  public abstract destroy (): Promise<void>

  public abstract execute (request: ApiRequest): TdObject
}
