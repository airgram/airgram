import { ApiRequest, TdObject, TdProvider as BaseTdProvider } from '@airgram/core'
import TdClient, { TdObject as NativeTdObject } from 'tdweb'
import { DeserializeFn, SerializeFn, TdWebProviderConfig } from '../types'
import { deserializerFactory, serializerFactory } from '../utils'

export class TdProvider extends BaseTdProvider {
  private client: TdClient | null = null

  private readonly config: TdWebProviderConfig = {}

  private deserialize: DeserializeFn

  private serialize: SerializeFn

  public constructor (config: TdWebProviderConfig = {}) {
    super()
    this.config = config
    this.serialize = serializerFactory()
    this.deserialize = deserializerFactory()
  }

  public async destroy (): Promise<void> {
    throw new Error('[Airgram] for web does not support `destroy()` method.')
  }

  execute (): TdObject {
    throw new Error('[Airgram] tdweb does not support synchronous operations.')
  }

  public initialize (
    handleUpdate: (update: TdObject) => Promise<any>
  ): void {
    this.client = new TdClient({
      ...this.config,
      onUpdate: (update: NativeTdObject) => handleUpdate(this.deserialize(update))
    })
  }

  send ({ method, params }: ApiRequest): Promise<TdObject> {
    if (!this.client) {
      throw new Error('[Airgram] tdweb instance has not initialized yet.')
    }
    return this.client.send(this.serialize({ _: method, ...params }))
      .then((data) => this.deserialize(data as NativeTdObject & null))
      .catch((error: any) => {
        if ('@type' in error && error['@type']) {
          const data = this.deserialize(error)
          // Ensures that the message property is a string
          // See: https://github.com/tdlib/td/blob/master/example/web/tdweb/src/index.js#L648
          data.message = String(data.message)
          return data
        } else {
          throw error
        }
      })
  }
}
