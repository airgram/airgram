import { createDeserializer, createSerializer } from '../helpers'
import { TdJsonProxy } from './TdJsonProxy'

export interface ApiDeferred {
  _: string
  resolve: (result: Airgram.TdResponse) => any
  reject: (error: Error) => any
}

export interface TdJsonClientConfig {
  command?: string
  logFilePath?: string | null
  logMaxFileSize?: number | string
  logVerbosityLevel?: number
  handleUpdate: (update: Airgram.TdUpdate) => Promise<any>,
  handleError: (error: any) => void,
  models?: Airgram.PlainObjectToModelTransformer
}

export class TdJsonClient {
  public timeout: number = 10

  private _tdlibClient?: Buffer

  private readonly deserialize: (key: string, value: any) => Record<string, any>

  private destroyed: boolean = false

  private readonly handleError: (error: any) => void

  private readonly handleUpdate: (update: Airgram.TdUpdate) => Promise<any>

  private readonly pending: Map<string, ApiDeferred> = new Map()

  private queryId: number = 0

  private readonly serialize: (key: string, value: any) => Record<string, any>

  private sleepPromise: Promise<void> | null = null

  private stack: Airgram.TdResponse[] = []

  private readonly tdlib: TdJsonProxy<any>

  private wakeup: (() => void) | null = null

  public constructor (config: TdJsonClientConfig) {
    this.handleUpdate = config.handleUpdate
    this.handleError = config.handleError
    this.serialize = createSerializer()
    this.deserialize = createDeserializer(config.models)
    this.tdlib = new TdJsonProxy<any>({ command: config.command })

    if (config.logFilePath) {
      this.tdlib.setLogFilePath(config.logFilePath)
    }
    if (config.logMaxFileSize !== undefined) {
      this.tdlib.setLogMaxFileSize(config.logMaxFileSize)
    }
    if (config.logVerbosityLevel !== undefined) {
      this.tdlib.setLogVerbosityLevel(config.logVerbosityLevel)
    }
    this.tdlib.setLogFatalErrorCallback(this.handleError)

    this.loop().catch(() => {
      //
    })
  }

  get tdlibClient (): Buffer {
    if (!this._tdlibClient) {
      this._tdlibClient = this.tdlib.create()
    }
    return this._tdlibClient!
  }

  public destroy (): void {
    this.tdlib.destroy(this.tdlibClient)
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

  public send (request: Airgram.ApiRequest): Promise<Airgram.TdResponse> {
    const id = `q${++this.queryId}`
    const { method, params } = request
    return new Promise<Airgram.TdResponse>((resolve, reject) => {
      this.pending.set(id, { _: method, resolve, reject })
      return this.tdlib.send(this.tdlibClient, JSON.stringify({
        ...params,
        '@extra': id,
        '_': method
      }, this.serialize))
    })
  }

  protected async handleResponse (): Promise<void> {
    const response: Airgram.TdResponse | undefined = this.stack.shift()

    if (!response) {
      return Promise.resolve()
    }

    const { '@extra': requestId } = response
    const deferred = requestId && this.pending.get(requestId)

    delete response['@extra']

    if (deferred && requestId) {
      this.pending.delete(requestId)
      deferred.resolve(response)
    } else {
      await this.handleUpdate(response)
    }

    setTimeout(() => this.handleResponse(), 0)
  }

  protected async receive (): Promise<Airgram.TdResponse | null> {
    try {
      return JSON.parse((await this.tdlib.receive(this.tdlibClient, this.timeout))!, this.deserialize)
    } catch (e) {
      throw new Error(`[TdJsonClient] received invalid JSON`)
    }
  }

  private addToStack (response: any): void {
    if (response && !this.destroyed) {
      this.stack.push(response)
      if (this.stack.length === 1) {
        this.handleResponse().catch(this.handleError)
      }
    }
  }

  private async loop (): Promise<void> {
    if (this.destroyed) {
      return
    }
    try {
      // console.info('start of loop')
      if (this.sleepPromise) {
        await this.sleepPromise
      }
      this.addToStack(await this.receive())
      // console.info('end of loop')
    } catch (error) {
      this.handleError(error)
    }
    setTimeout(() => this.loop(), 0)
  }
}
