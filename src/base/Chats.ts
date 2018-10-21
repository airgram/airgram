import { inject } from 'inversify'
import { provide } from 'inversify-binding-decorators'
import { ag } from '../interfaces/index'
import TYPES from '../ioc/types'
import Collection from './Collection'

@provide(TYPES.Chats)
export default class Chats extends Collection<ag.ChatDoc> implements ag.Chats {
  private chatStates: { [key: string]: ag.Chat } = {}
  public storeName: string = 'chats'
  private storeNamespace: string

  constructor (
    @inject(TYPES.ChatStore) public store: ag.Store<ag.ChatDoc>,
    @inject(TYPES.ChatFactory) private createChat: (id: number, chats: ag.Chats) => ag.Chat
  ) {
    super()
  }

  public configure (client: ag.Client) {
    this.storeNamespace = client.name
  }

  public getChat (id: number): ag.Chat {
    if (!this.chatStates[id]) {
      this.chatStates[id] = this.createChat(id, this)
    }
    return this.chatStates[id]
  }

  public resolveKey (id: number): string {
    return `${this.storeNamespace}:${this.storeName}:${id}`
  }
}
