import { provide } from 'inversify-binding-decorators'
import { ag } from '../interfaces/index'
import TYPES from '../ioc/types'

@provide(TYPES.UpdatesContextManager)
export default class UpdatesContextManager implements ag.UpdatesContextManager {
  public createContext ({ ctx, parent, update }: ag.UpdateContextOptions) {
    return {
      _: update._,
      client: ctx.client,
      parent,
      state: {},
      update
    }
  }
}
