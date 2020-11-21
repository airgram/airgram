/* eslint-disable @typescript-eslint/camelcase,@typescript-eslint/no-explicit-any */

import { TdObject } from '@airgram/core'
import * as ffi from 'ffi-napi'
import { resolve as resolvePath } from 'path'
import * as ref from 'ref-napi'
import { TdJsonConfig } from '../types'
import { createDeserializer, createSerializer } from '../utils'

interface TdJsonClientInterface {
  td_create_client_id: any
  td_send: any
  td_receive: any
  td_execute: any
}

type NativeTdObject = (TdObject & { '@extra': string; '@client_id': string }) | null

type UpdateHandlerFn = (update: TdObject) => any

type ClientHandlers = Map<string, UpdateHandlerFn>

const DEFAULT_COMMAND = process.platform === 'win32' ? 'tdjson' : 'libtdjson'

function buildQuery (query: string): Buffer {
  const buffer: any = Buffer.from(query + '\0', 'utf-8')
  buffer.type = ref.types.CString
  return buffer
}

export class TdJsonClient {
  public readonly command?: string

  private readonly client: TdJsonClientInterface

  private readonly deserialize: (key: string, value: unknown) => Record<string, unknown>

  private destroyed = false

  private handleError: (error: Error) => void

  private readonly pending: Map<number, ClientHandlers> = new Map()

  private readonly serialize: (key: string, value: unknown) => Record<string, unknown>

  private sleepPromise: Promise<void> | null = null

  private stack: Map<number, NonNullable<NativeTdObject>[]> = new Map()

  private readonly timeout: number

  private readonly updateHandlers = new Map<number, UpdateHandlerFn>()

  private wakeup: (() => void) | null = null

  public constructor ({ command, models, timeout }: TdJsonConfig) {
    this.command = command
    this.timeout = timeout || 10
    this.serialize = createSerializer()
    this.deserialize = createDeserializer(models)
    this.handleError = (error: Error): void => {
      throw error
    }
    this.client = ffi.Library(
      command ? resolvePath(command) : DEFAULT_COMMAND,
      {
        td_create_client_id: ['int', []],
        td_send: ['void', ['int', 'string']],
        td_receive: ['string', ['double']],
        td_execute: ['string', ['string']]
      }) as TdJsonClientInterface
    this.loop()
  }

  public addUpdateHandler (clientId: number, fn: UpdateHandlerFn): void {
    this.updateHandlers.set(clientId, fn)
  }

  public catch (handler: (error: Error) => void): void {
    this.handleError = handler
  }

  public create (): number {
    return this.client.td_create_client_id()
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
    this.pending.delete(clientId)
    this.stack.delete(clientId)
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
      const clientHandlers = this.getClientHandlers(clientId)
      clientHandlers.set(id, resolve)
      this.client.td_send(clientId, buildQuery(JSON.stringify(request, this.serialize)))
    }
  }

  private addToStack (response: NativeTdObject | null): void {
    if (response) {
      const clientId = Number(response['@client_id'])
      const clientStack = this.getClientStack(clientId)
      clientStack.push(response)
      if (clientStack.length === 1) {
        this.handleResponse(clientId).catch(this.handleError)
      }
    }
  }

  private getClientHandlers (clientId: number): ClientHandlers {
    let clientHandlers = this.pending.get(clientId)
    if (!clientHandlers) {
      clientHandlers = new Map()
      this.pending.set(clientId, clientHandlers)
    }
    return clientHandlers
  }

  private getClientStack (clientId: number): NonNullable<NativeTdObject>[] {
    let clientStack = this.stack.get(clientId)
    if (!clientStack) {
      clientStack = []
      this.stack.set(clientId, clientStack)
    }
    return clientStack
  }

  private async handleResponse (clientId: number): Promise<void> {
    const clientStack = this.getClientStack(clientId)
    const response = clientStack.shift()

    if (!response) {
      return Promise.resolve()
    }

    const requestId = response['@extra']

    delete response['@client_id']
    delete response['@extra']

    if (requestId) {
      const clientHandlers = this.getClientHandlers(clientId)
      const resolve = clientHandlers.get(requestId)
      clientHandlers.delete(requestId)
      if (resolve) {
        resolve(response)
      } else {
        this.handleError(new Error(`[TdProxy] request handler for the client ${clientId} not found. Missed update: ${JSON.stringify(response)}`))
      }
    } else {
      await this.handleUpdate(clientId, response)
    }

    setImmediate(() => this.handleResponse(clientId))
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
    if (this.destroyed) {
      return
    }
    if (this.sleepPromise) {
      this.sleepPromise.then(() => {
        this.receive()
      })
    } else {
      this.receive()
    }
  }

  private onReceive (response: NativeTdObject | null): void {
    if (response) {
      this.addToStack(response)
    }
    setImmediate(() => this.loop())
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

  private receive (): void {
    if (this.destroyed) {
      return
    }
    this.client.td_receive.async(this.timeout, (error: string, response: string) => {
      if (error) {
        this.handleError(new Error(`[TdProxy] TDLib error: ${error}`))
        return this.onReceive(null)
      }
      const tdObject = this.parseResponse(response)
      this.onReceive(tdObject)
    })
  }
}
