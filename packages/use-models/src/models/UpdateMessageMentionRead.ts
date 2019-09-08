/** A message with an unread mention was read */
export class UpdateMessageMentionReadBaseModel {
  public _: 'updateMessageMentionRead'

  /** Chat identifier */
  public chatId: number

  /** Message identifier */
  public messageId: number

  /** The new number of unread mention messages left in the chat */
  public unreadMentionCount: number
}
