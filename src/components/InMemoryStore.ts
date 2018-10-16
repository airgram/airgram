import { injectable } from 'inversify'
import { ag } from '../interfaces/index'

@injectable()
export default class InMemoryStore<DocT> implements ag.Store<DocT> {
  private store: Map<string, DocT> = new Map<string, DocT>()

  public create (key: string, value: DocT): Promise<DocT> {
    this.store.set(key, value)
    return Promise.resolve(value)
  }

  public async get (key: string): Promise<DocT | null> {
    return this.store.get(key) || null
  }

  public async update (key: string, value: Partial<DocT>): Promise<Partial<DocT>> {
    const nextValue = Object.assign({}, await this.get(key), value)
    this.store.set(key, nextValue)
    return nextValue
  }

  public async delete (key: string): Promise<void> {
    this.store.delete(key)
  }
}
