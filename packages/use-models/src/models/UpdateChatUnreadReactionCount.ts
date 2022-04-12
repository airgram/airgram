/** The chat unread_reaction_count has changed */
export class UpdateChatUnreadReactionCountBaseModel {
  public _: 'updateChatUnreadReactionCount'

  /** Chat identifier */
  public chatId: number

  /** The number of messages with unread reactions left in the chat */
  public unreadReactionCount: number
}
