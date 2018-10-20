import { injectable } from 'inversify'
import { ag } from '../interfaces/index'

@injectable()
export default class InMemoryStore<DocT> implements ag.Store<DocT> {
  private store: Map<string, DocT> = new Map<string, DocT>()

  public async delete (key: string): Promise<void> {
    this.store.delete(key)
  }

  public async get (key: string, field?: string): Promise<any> {
    const value = this.store.get(key) || null
    return (value && field) ? value[field] : value
  }

  public async set (key: string, value: Partial<DocT>): Promise<Partial<DocT>> {
    const nextValue = Object.assign({}, await this.get(key), value)
    this.store.set(key, nextValue)
    return nextValue
  }
}
