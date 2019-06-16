import { plainToClass } from 'class-transformer'
import * as camelCase from 'lodash/camelCase'
import * as snakeCase from 'lodash/snakeCase'
import { v4 as uuid } from 'uuid'
import * as ag from '../types'
import TdLib from './TdLib'
import TDLibError from './TDLibError'

export default class TdProxy implements ag.TdProxy {
  public timeout: number = 10

  private _client?: ag.TdClient | null

  private destroyed: boolean = false

  private readonly handleError: (error: any) => void

  private readonly handleUpdate: (update: ag.TdUpdate) => Promise<any>

  private readonly keyMap: Map<string, string> = new Map<string, string>()

  private readonly models: Record<string, ag.ClassType<any>> = {}

  private readonly pending: Map<string, ag.ApiDeferred> = new Map()

  private sleepPromise: Promise<void> | null = null

  private stack: ag.TdResponse[] = []

  private readonly tdlib: ag.TdLib<any>

  private wakeup: (() => void) | null = null

  public constructor (
    client: ag.TdClient | null,
    config: ag.TdProxyConfig,
    handleUpdate: (update: ag.TdUpdate) => Promise<any>,
    handleError: (error: any) => void
  ) {
    this.handleUpdate = handleUpdate
    this.handleError = handleError
    this.serialize = this.serialize.bind(this)
    this.deserialize = this.deserialize.bind(this)
    this.tdlib = new TdLib<any>({ command: config.command })

    if (config.logFilePath !== undefined) {
      this.tdlib.setLogFilePath(config.logFilePath)
    }
    if (config.logMaxFileSize !== undefined) {
      this.tdlib.setLogMaxFileSize(config.logMaxFileSize)
    }
    if (config.logVerbosityLevel !== undefined) {
      this.tdlib.setLogVerbosityLevel(config.logVerbosityLevel)
    }
    this.tdlib.setLogFatalErrorCallback(handleError)

    if (config.models) {
      this.models = config.models
    }
    if (client) {
      this._client = client
    }

    this.loop().catch(() => {
      //
    })
  }

  get client (): ag.TdClient {
    if (!this._client) {
      this._client = this.tdlib.create()
    }
    return this._client!
  }

  public destroy (): void {
    this.tdlib.destroy(this.client)
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

  public send (request: ag.ApiRequest): Promise<void> {
    const id = uuid()
    const { method, params } = request
    return new Promise<any>((resolve, reject) => {
      this.pending.set(id, { _: method, resolve, reject })
      return this.tdlib.send(this.client, JSON.stringify({
        ...params,
        '@extra': id,
        '_': method
      }, this.serialize))
    })
  }

  protected async handleResponse (): Promise<void> {
    const response: ag.TdResponse | undefined = this.stack.shift()

    if (!response) {
      return Promise.resolve()
    }

    const { '@extra': requestId, _: type } = response
    const deferred = requestId && this.pending.get(requestId)

    delete response['@extra']

    if (deferred) {
      this.pending.delete(requestId!)
      if (type === 'error') {
        deferred.reject(new TDLibError(response.code, response.message, deferred._))
      } else {
        deferred.resolve(response)
      }
    } else {
      await this.handleUpdate(response)
    }

    setImmediate(() => this.handleResponse())
  }

  protected async receive (): Promise<ag.TdResponse | null> {
    return JSON.parse((await this.tdlib.receive(this.client, this.timeout))!, this.deserialize)
  }

  private addToStack (response: any): void {
    if (response && !this.destroyed) {
      this.stack.push(response)
      if (this.stack.length === 1) {
        this.handleResponse().catch(this.handleError)
      }
    }
  }

  private deserialize (key, value) {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      const replacement: Record<string, any> = {}
      for (const k in value) {
        // console.info('unserialize', k)
        if (Object.hasOwnProperty.call(value, k)) {
          if (k === '@type') {
            replacement._ = value['@type']
            continue
          }
          if (!k) {
            continue
          }
          if (k.charAt(0) === '@') {
            replacement[k] = value[k]
            continue
          }
          if (!this.keyMap.has(k)) {
            this.keyMap.set(k, camelCase(k))
          }
          replacement[this.keyMap.get(k)!] = value[k]
        }
      }

      return '_' in replacement && this.models[replacement._] ?
        plainToClass(this.models[replacement._], replacement) :
        replacement
    }
    return value
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
    setImmediate(() => this.loop())
  }

  private serialize (key, value) {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      const replacement: Record<string, any> = {}
      for (const k in value) {
        if (Object.hasOwnProperty.call(value, k)) {
          if (k === '_') {
            replacement['@type'] = value._
            continue
          }
          if (!k) {
            continue
          }
          if (k.charAt(0) === '@') {
            replacement[k] = value[k]
            continue
          }
          if (!this.keyMap.has(k)) {
            this.keyMap.set(k, snakeCase(k))
          }
          replacement[this.keyMap.get(k)!] = value[k]
        }
      }
      return replacement
    }
    return value
  }
}
