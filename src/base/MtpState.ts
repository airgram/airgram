import { inject, interfaces } from 'inversify'
import { provide } from 'inversify-binding-decorators'
import Serializable from '../errors/Serializable'
import { MtpStateDoc } from '../interfaces/airgram'
import { ag } from '../interfaces/index'
import TYPES from '../ioc/types'

@provide(TYPES.MtpState)
export default class MtpState implements ag.MtpState {
  public static factory (
    createInstance: () => ag.MtpState,
    client: ag.Client,
    context: interfaces.Context
  ) {
    const instance = createInstance()
    Object.assign(instance, {
      store: context.container.get <ag.Store<ag.MtpState>>(TYPES.MtpStateStore)
    })
    return instance
  }

  public decryptState: <T = Partial<ag.MtpStateDc | ag.MtpStateDc>>(state: T) => Promise<T> = async (state) => state
  public defaultDcId: number = 2
  public encryptState: <T = Partial<ag.MtpStateDc | ag.MtpStateDc>>(state: T) => Promise<T> = async (state) => state
  public serverTimeOffset = 0
  public store: ag.Store<ag.MtpStateDoc>
  public storeKey = 'mtp'

  constructor (@inject(TYPES.Logger) public logger: ag.Logger) {}

  public async applyServerSalt (dcId: number, serverSalt: string): Promise<void> {
    return this.dc(dcId).then((dcState: ag.MtpStateDc) => {
      if (!dcState) {
        throw new Error(`Dc #${dcId} not found in mtp state`)
      }
      return this.dc(dcId, { ...dcState, serverSalt }).then(() => undefined)
    })
  }

  public async currentDcId (nextValue?: number) {
    if (nextValue === undefined) {
      return (await this.get('currentDcId')) || this.defaultDcId
    }
    return this.set({ currentDcId: nextValue })
  }

  public async dc (id: number, state?: ag.MtpStateDc) {
    const key = this.getDcKey(id)
    return (state === undefined) ? this.get(key) : this.set({ [key]: state })
  }

  public async prevDcId (nextValue?: number) {
    if (nextValue === undefined) {
      return this.get('prevDcId')
    }
    return this.set({ prevDcId: nextValue })
  }

  protected async get (key?: string): Promise<any> {
    return this.store.get(this.storeKey)
      .then((data: ag.MtpStateDoc | null) => this.decryptState(data || {}))
      .then((data) => key ? data[key] : data)
      .catch((error) => {
        this.logger.error(`get() ${new Serializable(error)}`)
        throw error
      })
  }

  protected getDcKey (id: number): string {
    return `dc${id}`
  }

  protected async set (nextState: Partial<MtpStateDoc>) {
    return this.encryptState(nextState).then((encryptedState) => this.store.update(this.storeKey, encryptedState))
  }
}
