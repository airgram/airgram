import * as camelCase from 'lodash/camelCase'
import * as snakeCase from 'lodash/snakeCase'
import TdWebClient, { TdWebConfig } from 'tdweb'
import * as ag from '../types/airgram'
import TDLibError from './TDLibError'
import TdProvider from './TdProvider'

export type TdWebProviderConfig = ag.Omit<TdWebConfig, 'onUpdate'>

export default class TdWebProvider extends TdProvider<TdWebClient> {
  private handleError: (error: any) => void

  private handleUpdate: (update: Record<string, any>) => Promise<any>

  private readonly keyMap: Map<string, string> = new Map<string, string>()

  private models?: ag.PlainObjectToModelTransformer

  public constructor (private config: TdWebProviderConfig = {}) {
    super()
  }

  public initialize (
    handleUpdate: (update: Record<string, any>) => Promise<any>,
    handleError: (error: any) => void,
    models: ag.PlainObjectToModelTransformer
  ): void {
    this.handleUpdate = handleUpdate
    this.handleError = handleError
    this.models = models
    this.client = new TdWebClient({
      ...this.config,
      onUpdate: (update) => this.handleUpdate(this.deserialize(update))
    })
  }

  public send (request: ag.ApiRequest): Promise<ag.TdResponse> {
    return new Promise<ag.TdResponse>((resolve, reject) => {
      this.client.send(this.serialize({
        _: request.method,
        ...request.params
      }))
        .then((data) => this.deserialize(data))
        .then((data: ag.TdResponse) => {
          if (data._ === 'error') {
            reject(new TDLibError(data.code, data.message, data._))
          } else {
            resolve(data)
          }
        })
        .catch(this.handleError)
    })
  }

  private deserialize (src: Record<string, any>): Record<string, any> {
    const replacement: Record<string, any> = {}
    Object.keys(src).forEach((k) => {
      if (k === '@type') {
        replacement._ = src['@type']
        return
      }
      if (!k) {
        return
      }
      if (k.charAt(0) === '@') {
        replacement[k] = src[k]
        return
      }
      if (!this.keyMap.has(k)) {
        this.keyMap.set(k, camelCase(k))
      }
      const v = src[k]
      replacement[this.keyMap.get(k)!] = v && typeof v === 'object' && !Array.isArray(v) ? this.deserialize(v) : v
    })

    return this.models ? this.models(replacement) : replacement
  }

  private serialize (src: ag.TdUpdate): Record<string, any> {
    const replacement: Record<string, any> = {}
    Object.keys(src).forEach((k) => {
      if (k === '_') {
        replacement['@type'] = src._
        return
      }
      if (!k) {
        return
      }
      if (k.charAt(0) === '@') {
        replacement[k] = src[k]
        return
      }
      if (!this.keyMap.has(k)) {
        this.keyMap.set(k, snakeCase(k))
      }
      const v = src[k]
      replacement[this.keyMap.get(k)!] = v && typeof v === 'object' && !Array.isArray(v) ? this.serialize(v) : v
    })

    return replacement
  }
}
