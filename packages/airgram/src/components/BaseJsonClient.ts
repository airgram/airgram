import { TdObject } from '@airgram/core'
import { NativeTdObject, UpdateHandlerFn } from '../types'

export abstract class BaseJsonClient {
  public readonly command?: string

  public abstract addUpdateHandler (clientId: number, fn: UpdateHandlerFn): void

  public abstract catch (handler: (error: Error) => void): void

  public abstract create (): number

  public abstract destroy (): void

  public abstract execute (query: TdObject): NativeTdObject

  public abstract pause (): void

  public abstract removeUpdateHandler (clientId: number): void

  public abstract resume (): void

  public abstract send (
    clientId: number,
    id: string,
    request: TdObject,
    resolve: UpdateHandlerFn
  ): void
}
