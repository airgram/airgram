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
    instance.configure(client, context.container.get <ag.Store<ag.MtpStateDoc>>(TYPES.MtpStateStore))
    return instance
  }

  public crypto: ag.Crypto
  public defaultDcId: number = 2
  public encryptedFields: boolean | string[] | ((field: string) => boolean) = false
  public serverTimeOffset = 0
  public store: ag.Store<ag.MtpStateDoc>
  public storeKey = 'mtp'

  constructor (@inject(TYPES.Logger) public logger: ag.Logger) {}

  public async authKey (dcId: number, nextValue?: string): Promise<any> {
    const field = 'authKey'
    const key = `${this.getDcKey(dcId)}.${field}`
    if (nextValue === undefined) {
      return this.get(key).then((authKey) => this.decrypt(field, authKey))
    }
    return this.encrypt(field, nextValue).then((authKey) => this.set({ [key]: authKey }))
  }

  public configure (client: ag.Client, store: ag.Store<ag.MtpStateDoc>) {
    this.crypto = client.crypto
    this.store = store
  }

  public async currentDcId (nextValue?: number) {
    if (nextValue === undefined) {
      return (await this.get('currentDcId')) || this.defaultDcId
    }
    return this.set({ currentDcId: nextValue })
  }

  public async decrypt (field: string, value: string): Promise<string> {
    if (value && await this.resolveEncryptedFieldsFilter(field)) {
      return this.crypto.decrypt(value)
    }
    return value
  }

  public async encrypt (field: string, value: string): Promise<string> {
    if (await this.resolveEncryptedFieldsFilter(field)) {
      return this.crypto.encrypt(value)
    }
    return value
  }

  public async prevDcId (nextValue?: number) {
    if (nextValue === undefined) {
      return this.get('prevDcId')
    }
    return this.set({ prevDcId: nextValue })
  }

  public serverSalt (dcId: number, nextValue?: string): Promise<any> {
    const field = 'serverSalt'
    const key = `${this.getDcKey(dcId)}.${field}`
    if (nextValue === undefined) {
      return this.get(key).then((serverSalt) => this.decrypt(field, serverSalt))
    }
    return this.encrypt(field, nextValue).then((serverSalt) => this.set({ [key]: serverSalt }))
  }

  protected get (field?: string): Promise<any> {
    if (field !== undefined) {
      return this.store.get(this.storeKey, field)
        .then((value: string | number | null) => value)
        .catch((error) => {
          this.logger.error(`get() "${field}" ${new Serializable(error)}`)
          throw error
        })
    }
    return this.store.get(this.storeKey)
      .then((data: ag.MtpStateDoc | null) => data || {})
      .catch((error) => {
        this.logger.error(`get() ${new Serializable(error)}`)
        throw error
      })
  }

  protected getDcKey (id: number): string {
    return `dc${id}`
  }

  protected async set (nextState: Partial<MtpStateDoc>) {
    return this.store.set(this.storeKey, nextState)
  }

  private async resolveEncryptedFieldsFilter (field: string): Promise<boolean> {
    if (this.encryptedFields === true || this.encryptedFields === false) {
      return this.encryptedFields
    }
    if (Array.isArray(this.encryptedFields)) {
      return this.encryptedFields.includes(field)
    }
    if (typeof this.encryptedFields === 'function') {
      return this.encryptedFields(field)
    }
    throw new Error('resolveEncryptedFieldsFilter() invalid "encryptedFields" value')
  }
}
