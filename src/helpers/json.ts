import { ag } from 'airgram-core'
import * as camelCase from 'lodash/camelCase'
import * as snakeCase from 'lodash/snakeCase'

const keyMap: Map<string, string> = new Map<string, string>()

export function createDeserializer (
  models?: ag.PlainObjectToModelTransformer
): (key: string, value: any) => Record<string, any> {
  return (key, value) => {
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
          if (!keyMap.has(k)) {
            keyMap.set(k, camelCase(k))
          }
          replacement[keyMap.get(k)!] = value[k]
        }
      }
      return models ? models(replacement) : replacement
    }
    return value
  }
}

export function createSerializer (): (key: string, value: any) => Record<string, any> {
  return (key, value) => {
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
          if (!keyMap.has(k)) {
            keyMap.set(k, snakeCase(k))
          }
          replacement[keyMap.get(k)!] = value[k]
        }
      }
      return replacement
    }
    return value
  }
}
