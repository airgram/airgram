import {
  ApiRequest,
  createDeferred,
  TdObject,
  Provider as BaseTdProvider,
  UpdateAuthorizationState
} from '@airgram/core'
import { TdProviderConfig } from '../types'
import { TdJsonClient } from './TdJsonClient'

let queryId = 0

export class Provider extends BaseTdProvider {
  private readonly clientId: number

  private readonly tdJsonClient: TdJsonClient

  private waitForDestroy: ((value?: any) => any) | null = null

  public constructor (tdJsonClient: TdJsonClient, { handleUpdate }: TdProviderConfig) {
    super()
    this.tdJsonClient = tdJsonClient
    this.clientId = this.tdJsonClient.create()
    this.tdJsonClient.addUpdateHandler(this.clientId, (update: TdObject): any => {
      if (this.waitForDestroy && update._ === 'updateAuthorizationState' &&
        (update as any as UpdateAuthorizationState).authorizationState._ === 'authorizationStateClosed') {
        this.tdJsonClient.removeUpdateHandler(this.clientId)
        return this.waitForDestroy()
      }
      return handleUpdate(update)
    })
  }

  public async destroy (): Promise<void> {
    return new Promise((resolve) => {
      if (this.waitForDestroy) {
        return this.waitForDestroy
      }
      this.waitForDestroy = resolve
      this.send({ method: 'close', params: {} })
    })
  }

  public execute (request: ApiRequest): TdObject {
    const id = `q${++queryId}`
    const { method, params } = request
    const data: TdObject | null = this.tdJsonClient.execute({
      ...params,
      '@extra': id,
      _: method
    })
    if (data === null) {
      throw new Error(`[TdProvider] empty response. Request: ${JSON.stringify(request)}`)
    }
    return data
  }

  public send (request: ApiRequest): Promise<TdObject> {
    const id = `q${this.clientId}:${++queryId}`
    const { method, params } = request
    const { promise, resolve } = createDeferred<TdObject>()
    this.tdJsonClient.send(this.clientId, id, {
      ...params,
      '@extra': id,
      _: method
    }, resolve)
    return promise
  }
}
