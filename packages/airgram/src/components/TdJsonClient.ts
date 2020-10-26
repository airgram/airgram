/* eslint-disable @typescript-eslint/camelcase,@typescript-eslint/no-explicit-any */

import { TdObject } from '@airgram/core'
import * as ffi from 'ffi-napi'
import { resolve as resolvePath } from 'path'
import * as ref from 'ref-napi'
import { TdProxyConfig } from '../types'
import { createDeserializer, createSerializer } from '../utils'

interface TdJsonClientInterface {
  td_create_client: any
  td_send: any
  td_receive: any
  td_execute: any
}

type NativeTdObject = (TdObject & { '@extra': string; '@client_id': string }) | null

type UpdateHandlerFn = (update: TdObject) => any

const DEFAULT_COMMAND = process.platform === 'win32' ? 'tdjson' : 'libtdjson'

const libraries = new Map<string, TdJsonClientInterface>()

function getLibrary (command: string): TdJsonClientInterface {
  let library: TdJsonClientInterface | undefined = libraries.get(command)
  if (!library) {
    library = ffi.Library(
      resolvePath(command || DEFAULT_COMMAND),
      {
        td_create_client: ['int', []],
        td_send: ['void', ['int', 'string']],
        td_receive: ['string', ['double']],
        td_execute: ['string', ['string']]
      }) as TdJsonClientInterface
    libraries.set(command, library)
  }
  return library
}

function buildQuery (query: string): Buffer {
  const buffer: any = Buffer.from(query + '\0', 'utf-8')
  buffer.type = ref.types.CString
  return buffer
}

export class TdJsonClient {
  private readonly client: TdJsonClientInterface

  private readonly deserialize: (key: string, value: unknown) => Record<string, unknown>

  private destroyed = false

  private handleError: (error: Error) => void

  private readonly pending: Map<string, UpdateHandlerFn> = new Map()

  private readonly serialize: (key: string, value: unknown) => Record<string, unknown>

  private sleepPromise: Promise<void> | null = null

  private stack: NonNullable<NativeTdObject>[] = []

  private readonly timeout: number

  private readonly updateHandlers = new Map<number, UpdateHandlerFn>()

  private wakeup: (() => void) | null = null

  public constructor ({ command, models, timeout }: TdProxyConfig) {
    this.timeout = timeout || 10
    this.serialize = createSerializer()
    this.deserialize = createDeserializer(models)
    this.handleError = (error: Error): void => {
      throw error
    }
    this.client = getLibrary(resolvePath(command || DEFAULT_COMMAND))
    this.loop()
  }

  public addUpdateHandler (clientId: number, fn: UpdateHandlerFn): void {
    this.updateHandlers.set(clientId, fn)
  }

  public catch (handler: (error: Error) => void): void {
    this.handleError = handler
  }

  public create (): number {
    return this.client.td_create_client()
  }

  public destroy (): void {
    this.pending.clear()
    this.sleepPromise = null
    this.wakeup = null
    this.destroyed = true
  }

  public execute (query: TdObject): NativeTdObject {
    return this.parseResponse(
      this.client.td_execute(buildQuery(JSON.stringify(query, this.serialize)))
    )
  }

  public pause (): void {
    if (!this.wakeup) {
      this.sleepPromise = new Promise((resolve) => {
        this.wakeup = resolve
      })
    }
  }

  public removeUpdateHandler (clientId: number): void {
    this.updateHandlers.delete(clientId)
  }

  public resume (): void {
    if (this.wakeup && !this.destroyed) {
      this.wakeup()
      this.sleepPromise = null
      this.wakeup = null
    }
  }

  public send (
    clientId: number,
    id: string,
    request: TdObject,
    resolve: UpdateHandlerFn
  ): void {
    if (!this.destroyed) {
      this.pending.set(id, resolve)
      this.client.td_send(clientId, buildQuery(JSON.stringify(request, this.serialize)))
    }
  }

  private addToStack (response: NativeTdObject | null): void {
    if (response) {
      this.stack.push(response)
      if (this.stack.length === 1) {
        this.handleResponse().catch(this.handleError)
      }
    }
  }

  private async handleResponse (): Promise<void> {
    const response = this.stack.shift()

    if (!response) {
      return Promise.resolve()
    }

    const clientId = response['@client_id']
    const requestId = response['@extra']

    delete response['@client_id']
    delete response['@extra']

    if (requestId) {
      const resolve = this.pending.get(requestId)
      this.pending.delete(requestId)
      if (resolve) {
        resolve(response)
      } else {
        this.handleError(new Error(`[TdProxy] request handler for the client ${clientId} not found. Missed update: ${JSON.stringify(response)}`))
      }
    } else {
      await this.handleUpdate(Number(clientId), response)
    }

    setImmediate(() => this.handleResponse())
  }

  private async handleUpdate (clientId: number, response: TdObject): Promise<unknown> {
    const handler = this.updateHandlers.get(clientId)
    if (handler) {
      return handler(response)
    } else {
      this.handleError(new Error(`[TdProxy] updates handler for the client ${clientId} not found. Missed update: ${JSON.stringify(response)}`))
    }
  }

  private loop (): void {
    (this.sleepPromise || Promise.resolve())
      .then(() => this.receive())
      .then((response) => this.addToStack(response))
      .catch(this.handleError)
      .finally(() => !this.destroyed && this.loop())
  }

  private parseResponse (data: string | null): NativeTdObject | null {
    try {
      if (data === null) {
        return null
      }
      return JSON.parse(data, this.deserialize)
    } catch (e) {
      this.handleError(new Error('[TdProxy] received invalid JSON'))
      return null
    }
  }

  private receive (): Promise<NativeTdObject | null> {
    if (this.destroyed) {
      return Promise.resolve(null)
    }
    return new Promise<NativeTdObject | null>((resolve) => {
      this.client.td_receive.async(this.timeout, (error: string, response: string) => {
        if (error) {
          this.handleError(new Error(`[TdProxy] TDLib error: ${error}`))
          return null
        }
        const tdObject = this.parseResponse(response)
        return resolve(tdObject)
      })
    })
  }
}
