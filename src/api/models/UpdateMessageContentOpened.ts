/**
 * The message content was opened. Updates voice note messages to "listened", video
 * note messages to "viewed" and starts the TTL timer for self-destructing messages
 */
export class UpdateMessageContentOpenedBaseModel {
  public _: 'updateMessageContentOpened'
  /** Chat identifier */
  public chatId: number
  /** Message identifier */
  public messageId: number
}
