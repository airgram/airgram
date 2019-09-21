import { ApiRequest, PlainObjectToModelTransformer, TdObject, TdProvider as BaseTdProvider } from '@airgram/core'
import TdClient, { TdObject as NativeTdObject, TdOptions } from 'tdweb'

function camelCase (str: string): string {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase())
}

function snakeCase (str: string): string {
  return str.replace(/[A-Z]/g, (chr) => `_${chr.toLowerCase()}`)
}

function isSerializable<T> (value: unknown): value is T {
  return typeof value === 'object' && !!value && ('_' in value || '@type' in value)
}

function isSerializableArray<T> (value: unknown): value is T[] {
  return (Array.isArray(value) && !!value.length && isSerializable(value[0]))
}

export function createDeserializer (
  models?: PlainObjectToModelTransformer
): (value: NativeTdObject) => TdObject {
  const keyMap: Map<string, string> = new Map<string, string>()
  const wrap = ((value: TdObject) => models ? models(value) : value) as (value: TdObject) => TdObject

  function deserialize (value: NativeTdObject): TdObject
  function deserialize (value: null): null
  function deserialize (value: NativeTdObject | null): TdObject | null {
    if (isSerializable<NativeTdObject>(value)) {
      const replacement: TdObject = { _: 'UNKNOWN' }
      Object.keys(value).forEach((k) => {
        if (k === '@type' && value['@type']) {
          replacement._ = value['@type']
          return
        }
        if (!k) {
          return
        }
        if (k.charAt(0) === '@') {
          replacement[k] = value[k] as string
          return
        }
        if (!keyMap.has(k)) {
          keyMap.set(k, camelCase(k))
        }
        const v = value[k]
        const key = keyMap.get(k) as string
        if (isSerializableArray<NativeTdObject>(v)) {
          replacement[key] = v.map((x) => wrap(deserialize(x))) as TdObject[]
        } else if (isSerializable<NativeTdObject>(v)) {
          replacement[key] = wrap(deserialize(v))
        } else {
          replacement[key] = v
        }
      })
      return wrap(replacement)
    }
    if (!value) {
      return value
    }
    throw new Error(`[Airgram][deserialize] invalid value: ${value}`)
  }

  return deserialize
}

export function createSerializer (): (value: TdObject) => NativeTdObject {
  const keyMap: Map<string, string> = new Map<string, string>()

  function serialize (value: TdObject): NativeTdObject {
    if (isSerializable<TdObject>(value)) {
      const replacement: NativeTdObject = { '@type': 'UNKNOWN' }
      Object.keys(value).forEach((k) => {
        if (k === '_' && value._) {
          replacement['@type'] = value._ as string
          return
        }
        if (!k) {
          return
        }
        if (k.charAt(0) === '@') {
          replacement[k] = value[k] as string
          return
        }
        if (!keyMap.has(k)) {
          keyMap.set(k, snakeCase(k))
        }
        const v = value[k]
        const key = keyMap.get(k) as string
        if (isSerializableArray<TdObject>(v)) {
          replacement[key] = v.map(serialize)
        } else if (isSerializable<TdObject>(v)) {
          replacement[key] = serialize(v)
        } else {
          replacement[key] = v
        }
      })
      return replacement
    }
    throw new Error(`[Airgram][serialize] invalid value: ${value}`)
  }

  return serialize
}

export type TdWebProviderConfig = Omit<TdOptions, 'onUpdate'>

export class TdProvider extends BaseTdProvider {
  private readonly config: TdWebProviderConfig = {}

  private handleUpdate: (update: TdObject) => Promise<unknown> = () => {
    throw new Error('Update handler is not defined.')
  }

  public constructor (config: TdWebProviderConfig = {}) {
    super()
    this.config = config
  }

  public initialize (
    handleUpdate: (update: TdObject) => Promise<any>,
    _handleError: (error: any) => void,
    models?: PlainObjectToModelTransformer
  ): void {
    const serialize = createSerializer()
    const deserialize = createDeserializer(models)
    this.handleUpdate = handleUpdate
    const client = new TdClient({
      ...this.config,
      onUpdate: (update) => this.handleUpdate(deserialize(update))
    })
    this.send = (request: ApiRequest<any>): Promise<TdObject> => {
      return new Promise<TdObject>((resolve, reject) => {
        client.send(serialize({
          _: request.method,
          ...request.params
        }))
          .then((data) => deserialize(data as NativeTdObject))
          .then((data) => {
            resolve(data)
          })
          .catch((error: any) => {
            if ('@type' in error && error['@type']) {
              const data = deserialize(error)
              resolve(data)
            } else {
              reject(error)
            }
          })
      })
    }
  }

  public send (_request: ApiRequest): Promise<TdObject> {
    throw new Error('TdWebClient is not initialized.')
  }
}
