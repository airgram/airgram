import { provide } from 'inversify-binding-decorators'
import { ag } from '../interfaces/index'
import TYPES from '../ioc/types'

@provide(TYPES.Collection)
export default abstract class Collection<DocT> implements ag.Collection<DocT> {
  public abstract store: ag.Store<DocT>

  public get (id: ag.ModelId): Promise<DocT | null> {
    return this.store.get(this.resolveId(id)).then((doc) => doc || null)
  }

  public abstract resolveId (id: ag.ModelId): string

  public set (id: ag.ModelId, attributes: Partial<DocT>): Promise<Partial<DocT>> {
    return this.store.set(this.resolveId(id), attributes)
  }
}
