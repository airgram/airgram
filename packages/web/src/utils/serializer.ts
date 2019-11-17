import { TdObject } from '@airgram/core'
import { TdObject as NativeTdObject } from 'tdweb'
import { DeserializeFn, SerializeFn } from '../types'

function camelCase (str: string): string {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase())
}

function snakeCase (str: string): string {
  return str
    .replace(/^\w/, (chr) => chr.toLowerCase())
    .replace(/[A-Z]/g, (chr) => `_${chr.toLowerCase()}`)
}

function isSerializable<T> (value: unknown): value is T {
  return typeof value === 'object' && !!value && ('_' in value || '@type' in value)
}

function isSerializableArray<T> (value: unknown): value is T[] {
  return (Array.isArray(value) && !!value.length && isSerializable(value[0]))
}

export function deserializerFactory (): DeserializeFn {
  const keyMap: Map<string, string> = new Map<string, string>()

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
          replacement[key] = v.map((x) => deserialize(x)) as TdObject[]
        } else if (isSerializable<NativeTdObject>(v)) {
          replacement[key] = deserialize(v)
        } else {
          replacement[key] = v
        }
      })
      return replacement
    }
    if (!value) {
      return value
    }
    throw new Error(`[Airgram][deserialize] invalid value: ${value}`)
  }

  return deserialize
}

export function serializerFactory (): SerializeFn {
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
