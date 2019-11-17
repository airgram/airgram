/* eslint-env worker */

import { PlainObjectToModelTransformer, TdObject } from '@airgram/core'
import TdClient, { TdObject as NativeTdObject } from 'tdweb'
import { DeserializeFn, PromisifyWorkerMessage, SerializeFn, TdWebProviderConfig } from '../types'
import { deserializerFactory, serializerFactory } from '../utils'

const ctx = (self as any) as Worker

let provider: {
  client: TdClient
  serialize: SerializeFn
  deserialize: DeserializeFn
} | null = null

export interface InitWorkerPayload {
  _: 'init'
  config: TdWebProviderConfig
  models?: PlainObjectToModelTransformer
}

export interface SendWorkerPayload {
  _: 'send'
  request: TdObject
}

export interface UpdateWorkerPayload {
  _: 'update'
  update: TdObject
}

function isInitPayload (obj: any): obj is InitWorkerPayload {
  return obj && typeof obj === 'object' && ('_' in obj) && obj._ === 'init'
}

function isSendPayload (obj: any): obj is SendWorkerPayload {
  return obj && typeof obj === 'object' && ('_' in obj) && obj._ === 'send'
}

function send (request: TdObject): Promise<TdObject | null> {
  return new Promise<TdObject | null>((resolve, reject) => {
    if (!provider) {
      throw new Error('[Airgram][worker] send a request before initialization.')
    }
    const { client, serialize, deserialize } = provider
    client.send(serialize(request))
      .then((data) => deserialize(data as NativeTdObject & null))
      .then((data) => {
        resolve(data)
      })
      .catch((error: any) => {
        if ('@type' in error && error['@type']) {
          const data = deserialize(error)
          // Ensures that the message property is a string
          // See: https://github.com/tdlib/td/blob/master/example/web/tdweb/src/index.js#L648
          data.message = String(data.message)
          resolve(data)
        } else {
          reject(error)
        }
      })
  })
}

async function handleMessage (payload: unknown): Promise<TdObject | null> {
  if (isInitPayload(payload)) {
    const serialize = serializerFactory()
    const deserialize = deserializerFactory()
    provider = {
      client: new TdClient({
        ...payload.config,
        onUpdate: (update: NativeTdObject) => ctx.postMessage({
          _: 'update',
          update: deserialize(update)
        } as UpdateWorkerPayload)
      }),
      serialize,
      deserialize
    }
    return {
      _: 'ok'
    }
  }
  if (isSendPayload(payload)) {
    return send(payload.request)
  }
  return {
    _: 'error',
    code: 400,
    message: 'MESSAGE_TYPE_UNSUPPORTED'
  } as TdObject
}

ctx.onmessage = async (e: MessageEvent) => {
  const { id, payload } = e.data as PromisifyWorkerMessage<any>
  handleMessage(payload).then((payload) => {
    const message: PromisifyWorkerMessage<any> = { id, payload }
    ctx.postMessage(message)
  }).catch((error) => {
    const message: PromisifyWorkerMessage<any> = {
      id,
      payload: {
        _: 'error',
        code: 406,
        message: error.message
      }
    }
    ctx.postMessage(message)
  })
}
