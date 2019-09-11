import { ApiMethods, AuthorizationStateUnion, Instance, TdObject } from '@airgram/web'
import { TdProvider } from './TdProvider'
import { TdEventHandler, TdVueConstructor } from './types'

class DollarTd<ContextT = {}> {
  private _authState: AuthorizationStateUnion | { _: null } = { _: null }

  private readonly _authStateUnsubscribe?: () => void

  constructor (private readonly vm: TdVueConstructor<ContextT>) {
    this._authStateUnsubscribe = this.on('updateAuthorizationState', (authState: AuthorizationStateUnion) => {
      this._authState = authState
    })
  }

  public get airgram (): Instance<ContextT> {
    return this.provider.airgram
  }

  public get api (): ApiMethods<ContextT> {
    return this.airgram.api
  }

  public get authState (): AuthorizationStateUnion | { _: null } {
    return this._authState
  }

  private get provider (): TdProvider<ContextT> {
    return this.vm.$_tdProvider
  }

  public _destroy (): void {
    if (this._authStateUnsubscribe) {
      this._authStateUnsubscribe()
    }
  }

  public emit (update: TdObject): Promise<any> {
    return this.airgram.emit(update)
  }

  public off (eventName: string, handler: TdEventHandler<any, ContextT>): void {
    this.provider.off(eventName, handler)
  }

  public on (eventName: string, handler: TdEventHandler<any, ContextT>): () => void {
    return this.provider.on(eventName, handler)
  }

  public once (eventName: string, handler: TdEventHandler<any, ContextT>): () => void {
    return this.provider.once(eventName, handler)
  }
}

export {
  DollarTd
}
