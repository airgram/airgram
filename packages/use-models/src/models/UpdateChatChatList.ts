import { ChatListUnion } from '@airgram/core'

/**
 * The list to which the chat belongs was changed. This update is guaranteed to be sent
 * only when chat.order == 0 and the current or the new chat list is null
 */
export class UpdateChatChatListBaseModel {
  public _: 'updateChatChatList'

  /** Chat identifier */
  public chatId: number

  /** The new chat's chat list; may be null */
  public chatList?: ChatListUnion
}
