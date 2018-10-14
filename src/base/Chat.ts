import { inject } from 'inversify'
import { provide } from 'inversify-binding-decorators'
import Serializable from '../errors/Serializable'
import { ag } from '../interfaces/index'
import TYPES from '../ioc/types'
import PendingState from './PendingState'

@provide(TYPES.Chat)
export default class Chat extends PendingState<ag.ChatDoc> implements ag.Chat {
  public static factory (
    createInstance: () => ag.Chat,
    id: number,
    chats: ag.Chats
  ) {
    const instance = createInstance()
    instance.id = id
    instance.chats = chats
    return instance
  }

  public chats: ag.Chats
  public id: number

  constructor (
    @inject(TYPES.Logger) public logger: ag.Logger
  ) {
    super(logger)
    this.logger.namespace.push(String(this.id))
  }

  public async get (key?: string) {
    return this.chats.get(this.id)
      .then((data) => key ? (data || {})[key] : data)
      .catch((error) => {
        this.logger.error(`get() ${new Serializable(error)}`)
        throw error
      })
  }

  public async set (nextState: Partial<ag.ChatDoc>) {
    this.chats.update(this.id, nextState).catch((error) => {
      this.logger.error(`set() ${new Serializable(error)}`)
    })
  }
}
