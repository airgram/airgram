import { ChatListUnion } from '@airgram/core'

/**
 * Number of unread messages in a chat list has changed. This update is sent only if
 * the message database is used
 */
export class UpdateUnreadMessageCountBaseModel {
  public _: 'updateUnreadMessageCount'

  /** The chat list with changed number of unread messages */
  public chatList: ChatListUnion

  /** Total number of unread messages */
  public unreadCount: number

  /** Total number of unread messages in unmuted chats */
  public unreadUnmutedCount: number
}
