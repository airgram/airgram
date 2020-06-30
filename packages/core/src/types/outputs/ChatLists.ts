import { ChatListUnion } from './index'

export type ChatListsUnion = ChatLists

/** Contains a list of chat lists */
export interface ChatLists {
  _: 'chatLists'
  /** List of chat lists */
  chatLists: ChatListUnion[]
}
