/* eslint-disable @typescript-eslint/no-explicit-any */

import { PlainObjectToModelTransformer, TdObject } from '@airgram/core'

export function camelCase (str: string): string {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase())
}

export function snakeCase (str: string): string {
  return str.replace(/[A-Z]/g, (chr) => `_${chr.toLowerCase()}`)
}

const keyMap: Map<string, string> = new Map<string, string>()

export function createDeserializer (
  models?: PlainObjectToModelTransformer
): (key: string, value: any) => TdObject {
  return (_key, value) => {
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
          let key = keyMap.get(k)
          if (key == null) {
            key = camelCase(k)
            keyMap.set(k, key)
          }
          replacement[key] = value[k]
        }
      }
      return models ? models(replacement as TdObject) : replacement
    }
    return value
  }
}

export function createSerializer (): (key: string, value: any) => Record<string, unknown> {
  return (_key, value) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      const replacement: Record<string, unknown> = {}
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
          let key = keyMap.get(k)
          if (key == null) {
            key = snakeCase(k)
            keyMap.set(k, key)
          }
          replacement[key] = value[k]
        }
      }
      return replacement
    }
    return value
  }
}
