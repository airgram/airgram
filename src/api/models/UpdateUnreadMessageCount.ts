/**
 * Number of unread messages has changed. This update is sent only if a message database
 * is used
 */
export class UpdateUnreadMessageCountBaseModel {
  public _: 'updateUnreadMessageCount'
  /** Total number of unread messages */
  public unreadCount: number
  /** Total number of unread messages in unmuted chats */
  public unreadUnmutedCount: number
}
