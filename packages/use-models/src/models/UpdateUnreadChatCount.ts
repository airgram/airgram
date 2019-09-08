/**
 * Number of unread chats, i.e. with unread messages or marked as unread, has changed.
 * This update is sent only if a message database is used
 */
export class UpdateUnreadChatCountBaseModel {
  public _: 'updateUnreadChatCount'

  /** Total number of unread chats */
  public unreadCount: number

  /** Total number of unread unmuted chats */
  public unreadUnmutedCount: number

  /** Total number of chats marked as unread */
  public markedAsUnreadCount: number

  /** Total number of unmuted chats marked as unread */
  public markedAsUnreadUnmutedCount: number
}
