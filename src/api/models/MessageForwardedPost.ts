/** The message was originally a post in a channel */
export class MessageForwardedPostBaseModel {
  public _: 'messageForwardedPost'
  /** Identifier of the chat from which the message was forwarded */
  public chatId: number
  /** Post author signature */
  public authorSignature: string
  /** Point in time (Unix timestamp) when the message was originally sent */
  public date: number
  /**
   * Message identifier of the original message from which the new message was forwarded;
   * 0 if unknown
   */
  public messageId: number
  /**
   * For messages forwarded to the chat with the current user (saved messages), the identifier
   * of the chat from which the message was forwarded; 0 if unknown
   */
  public forwardedFromChatId: number
  /**
   * For messages forwarded to the chat with the current user (saved messages), the identifier
   * of the original message from which the new message was forwarded; 0 if unknown
   */
  public forwardedFromMessageId: number
}
