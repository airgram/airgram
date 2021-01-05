/* eslint-disable @typescript-eslint/camelcase,@typescript-eslint/no-explicit-any */

import { TdObject } from '@airgram/core'
import { readFileSync } from 'fs'
import { NativeTdObject, UpdateHandlerFn } from '../types'
import { createDeserializer } from '../utils'
import { BaseJsonClient } from './BaseJsonClient'

type ClientHandlers = Map<string, UpdateHandlerFn>

export class FakeJsonClient extends BaseJsonClient {
  public readonly command?: string

  private readonly deserialize: (key: string, value: unknown) => Record<string, unknown>

  private destroyed = false

  private handleError: (error: Error) => void

  private readonly pending: Map<number, ClientHandlers> = new Map()

  private sleepPromise: Promise<void> | null = null

  private stack: Map<number, NonNullable<NativeTdObject>[]> = new Map()

  private readonly updateHandlers = new Map<number, UpdateHandlerFn>()

  private log: string[]
  private logSize: number

  private wakeup: (() => void) | null = null

  public constructor (filename: string) {
    super()
    this.deserialize = createDeserializer()
    this.handleError = (error: Error): void => {
      throw error
    }

    this.log = JSON.parse(readFileSync(filename, { encoding: 'utf-8' }))
    this.logSize = this.log.length
  }

  public addUpdateHandler (clientId: number, fn: UpdateHandlerFn): void {
    this.updateHandlers.set(clientId, fn)
    console.time('getUpdates()')
    this.loop()
  }

  public catch (handler: (error: Error) => void): void {
    this.handleError = handler
  }

  public create (): number {
    return 1
  }

  public destroy (): void {
    this.pending.clear()
    this.sleepPromise = null
    this.wakeup = null
    this.destroyed = true
  }

  public execute (query: TdObject): NativeTdObject {
    return this.parseResponse(
      JSON.stringify({ _: 'ok', query })
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
      console.info('[FakeJsonClient] send()', {
        clientId,
        id,
        request,
        resolve
      })
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
        // this.handleError(new Error(`[TdProxy] request handler for the client ${clientId} not found. Missed update: ${JSON.stringify(response)}`))
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

    const response = this.log.shift()
    if (!response) {
      console.log(`Total updates: ${this.logSize}`)
      console.timeEnd('getUpdates()')
      return this.destroy()
    }

    const tdObject = this.parseResponse(response)
    this.onReceive(tdObject)
  }
}
