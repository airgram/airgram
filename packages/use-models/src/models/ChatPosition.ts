import { ChatListUnion, ChatSourceUnion } from '@airgram/core'

/** Describes a position of a chat in a chat list */
export class ChatPositionBaseModel {
  public _: 'chatPosition'

  /** The chat list */
  public list: ChatListUnion

  /**
   * A parameter used to determine order of the chat in the chat list. Chats must be sorted
   * by the pair (order, chat.id) in descending order
   */
  public order: string

  /** True, if the chat is pinned in the chat list */
  public isPinned: boolean

  /** Source of the chat in the chat list; may be null */
  public source?: ChatSourceUnion
}
