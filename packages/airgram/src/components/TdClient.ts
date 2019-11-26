import { ApiRequest, PlainObjectToModelTransformer, TdObject } from '@airgram/core'
import { createDeserializer, createSerializer } from '../utils'
import { TdProxy } from './TdProxy'

type NativeTdObject = (TdObject & { '@extra'?: string }) | null

export interface Pending {
  _: string
  resolve: (result: TdObject) => unknown
  reject: (error: Error) => unknown
}

export interface TdClientConfig {
  command?: string
  handleUpdate: (update: TdObject) => Promise<unknown>
  handleError: (error: Error | string) => void
  models?: PlainObjectToModelTransformer
}

export class TdClient {
  public timeout: number = 10

  private _tdClient?: Buffer

  private readonly deserialize: (key: string, value: unknown) => Record<string, unknown>

  private destroyed: boolean = false

  private readonly handleError: (error: Error | string) => void

  private readonly handleUpdate: (update: TdObject) => Promise<unknown>

  private readonly pending: Map<string, Pending> = new Map()

  private queryId: number = 0

  private readonly serialize: (key: string, value: unknown) => Record<string, unknown>

  private sleepPromise: Promise<void> | null = null

  private stack: NonNullable<NativeTdObject>[] = []

  private readonly tdlib: TdProxy

  private wakeup: (() => void) | null = null

  public constructor (config: TdClientConfig) {
    this.handleUpdate = config.handleUpdate
    this.handleError = config.handleError
    this.serialize = createSerializer()
    this.deserialize = createDeserializer(config.models)
    this.tdlib = new TdProxy({ command: config.command })
    this.loop()
  }

  public get tdClient (): Buffer {
    return this._tdClient || (this._tdClient = this.tdlib.create())
  }

  public destroy (): void {
    this.tdlib.destroy(this.tdClient)
    this.sleepPromise = null
    this.wakeup = null
    this.destroyed = true
  }

  public pause (): void {
    if (!this.wakeup) {
      this.sleepPromise = new Promise((resolve) => {
        this.wakeup = resolve
      })
    }
  }

  public resume (): void {
    if (this.wakeup) {
      this.wakeup()
      this.sleepPromise = null
      this.wakeup = null
    }
  }

  public send (request: ApiRequest): Promise<TdObject> {
    const id = `q${++this.queryId}`
    const { method, params } = request
    return new Promise<TdObject>((resolve, reject) => {
      this.pending.set(id, { _: method, resolve, reject })
      return this.tdlib.send(this.tdClient, JSON.stringify({
        ...params,
        '@extra': id,
        _: method
      }, this.serialize))
    })
  }

  private async handleResponse (): Promise<void> {
    const response = this.stack.shift()

    if (!response) {
      return Promise.resolve()
    }

    const requestId = response['@extra']
    const deferred = requestId && this.pending.get(requestId)

    delete response['@extra']

    if (deferred && requestId) {
      this.pending.delete(requestId)
      deferred.resolve(response)
    } else {
      await this.handleUpdate(response)
    }

    setImmediate(() => this.handleResponse())
  }

  private loop (): void {
    if (!this.destroyed) {
      (this.sleepPromise || Promise.resolve())
        .then(() => this.receive())
        .then((response) => this.addToStack(response))
        .catch(this.handleError)
        .then(() => setImmediate(() => this.loop()))
    }
  }

  private addToStack (response: NativeTdObject): void {
    if (response && !this.destroyed) {
      this.stack.push(response)
      if (this.stack.length === 1) {
        this.handleResponse().catch(this.handleError)
      }
    }
  }

  private async receive (): Promise<NativeTdObject | null> {
    try {
      const data: string | null = await this.tdlib.receive(this.tdClient, this.timeout)
      if (data === null) {
        return null
      }
      return JSON.parse(data, this.deserialize)
    } catch (e) {
      throw new Error(`[TdJsonClient] received invalid JSON`)
    }
  }
}
