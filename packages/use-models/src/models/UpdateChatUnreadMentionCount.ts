/** The chat unread_mention_count has changed */
export class UpdateChatUnreadMentionCountBaseModel {
  public _: 'updateChatUnreadMentionCount'

  /** Chat identifier */
  public chatId: number

  /** The number of unread mention messages left in the chat */
  public unreadMentionCount: number
}
