import { ChatListUnion, ChatSourceUnion } from './index'

export type ChatPositionUnion = ChatPosition

/** Describes a position of a chat in a chat list */
export interface ChatPosition {
  _: 'chatPosition'
  /** The chat list */
  list: ChatListUnion
  /**
   * A parameter used to determine order of the chat in the chat list. Chats must be sorted
   * by the pair (order, chat.id) in descending order
   */
  order: string
  /** True, if the chat is pinned in the chat list */
  isPinned: boolean
  /** Source of the chat in the chat list; may be null */
  source?: ChatSourceUnion
}
