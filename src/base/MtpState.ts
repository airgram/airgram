import { inject, interfaces } from 'inversify'
import { provide } from 'inversify-binding-decorators'
import Serializable from '../errors/Serializable'
import { MtpStateDoc } from '../interfaces/airgram'
import { ag } from '../interfaces/index'
import TYPES from '../ioc/types'

@provide(TYPES.MtpState)
export default class MtpState implements ag.MtpState {
  public static storeKey = 'mtpState'

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

  public defaultDcId: number = 2
  public serverTimeOffset = 0
  public store: ag.Store<ag.MtpStateDoc>

  constructor (
    @inject(TYPES.Logger) public logger: ag.Logger
  ) {}

  public async currentDcId (nextValue?: number) {
    if (nextValue === undefined) {
      return (await this.get('currentDcId')) || this.defaultDcId
    }
    return this.set({ currentDcId: nextValue })
  }

  public async dc (id?: number, state?: ag.MtpStateDc) {
    if (id === undefined) {
      return this.get('dc')
    }
    if (state === undefined) {
      return this.get('dc').then((states) => (states || {})[id])
    }
    return this.set({ dc: { ...await this.dc(), [id]: state } })
  }

  public async get (key?: string) {
    return this.store.get(MtpState.storeKey)
      .then((data) => key ? (data || {})[key] : data)
      .catch((error) => {
        this.logger.error(`get() ${new Serializable(error)}`)
        throw error
      })
  }

  public async prevDcId (nextValue?: number) {
    if (nextValue === undefined) {
      return this.get('prevDcId')
    }
    return this.set({ prevDcId: nextValue })
  }

  public async set (nextState: Partial<MtpStateDoc>) {
    return this.store.update(MtpState.storeKey, nextState)
  }

  public async userId (nextValue?: number) {
    if (nextValue === undefined) {
      return this.get('userId')
    }
    return this.set({ userId: nextValue })
  }
}
