import { ApiMethods, Instance, TdObject } from '@airgram/web'
import { AirgramProvider } from './AirgramProvider'
import { AirgramVue, UpdateHandler } from './types'

class AirgramDollar<ContextT = {}> {
  // private _authState: AuthorizationStateUnion | { _: null } = { _: null }

  // private readonly _authStateUnsubscribe?: () => void

  private readonly vm: AirgramVue<ContextT>

  constructor (vm: AirgramVue<ContextT>) {
    this.vm = vm
    // this._authStateUnsubscribe = this.on('updateAuthorizationState', (authState: AuthorizationStateUnion) => {
    //   this._authState = authState
    // })
  }

  public get airgram (): Instance<ContextT> {
    return this.provider.airgram
  }

  public get api (): ApiMethods<ContextT> {
    return this.airgram.api
  }

  // public get authState (): AuthorizationStateUnion | { _: null } {
  //   return this._authState
  // }

  private get provider (): AirgramProvider<ContextT> {
    return this.vm.$_airgramProvider
  }

  public _destroy (): void {
    // if (this._authStateUnsubscribe) {
    //   this._authStateUnsubscribe()
    // }
  }

  public emit (update: TdObject): Promise<any> {
    return this.airgram.emit(update)
  }

  public off (eventName: string, handler: UpdateHandler<any>): void {
    this.provider.off(eventName, handler)
  }

  public on (eventName: string, handler: UpdateHandler<any>): () => void {
    return this.provider.on(eventName, handler)
  }

  public once (eventName: string, handler: UpdateHandler<any>): () => void {
    return this.provider.once(eventName, handler)
  }
}

export {
  AirgramDollar
}
