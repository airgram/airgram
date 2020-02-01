import { ChatListUnion } from '@airgram/core'

/**
 * Number of unread chats, i.e. with unread messages or marked as unread, has changed.
 * This update is sent only if the message database is used
 */
export class UpdateUnreadChatCountBaseModel {
  public _: 'updateUnreadChatCount'

  /** The chat list with changed number of unread messages */
  public chatList: ChatListUnion

  /** Approximate total number of chats in the chat list */
  public totalCount: number

  /** Total number of unread chats */
  public unreadCount: number

  /** Total number of unread unmuted chats */
  public unreadUnmutedCount: number

  /** Total number of chats marked as unread */
  public markedAsUnreadCount: number

  /** Total number of unmuted chats marked as unread */
  public markedAsUnreadUnmutedCount: number
}
