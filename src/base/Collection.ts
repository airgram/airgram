import { provide } from 'inversify-binding-decorators'
import { ag } from '../interfaces/index'
import TYPES from '../ioc/types'

@provide(TYPES.Collection)
export default abstract class Collection<DocT> implements ag.Collection<DocT> {
  public abstract store: ag.Store<DocT>

  public create (id: ag.ModelId, attributes: DocT): Promise<DocT> {
    return this.store.create(this.resolveId(id), attributes)
  }

  public get (id: ag.ModelId): Promise<DocT | null> {
    return this.store.get(this.resolveId(id)).then((doc) => doc || null)
  }

  public abstract resolveId (id: ag.ModelId): string

  public update (id: ag.ModelId, attributes: Partial<DocT>): Promise<Partial<DocT>> {
    return this.store.update(this.resolveId(id), attributes)
  }

  public upsert (id: ag.ModelId, attributes: Partial<DocT>): Promise<Partial<DocT>> {
    return this.get(id).then((doc) => {
      return doc ? this.update(id, attributes) : this.create(id, attributes as DocT)
    })
  }
}
