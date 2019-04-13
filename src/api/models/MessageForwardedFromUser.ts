/** The message was originally written by a known user */
export class MessageForwardedFromUserBaseModel {
  public _: 'messageForwardedFromUser'
  /** Identifier of the user that originally sent this message */
  public senderUserId: number
  /** Point in time (Unix timestamp) when the message was originally sent */
  public date: number
  /**
   * For messages forwarded to the chat with the current user (saved messages), the identifier
   * of the chat from which the message was forwarded; 0 if unknown
   */
  public forwardedFromChatId: number
  /**
   * For messages forwarded to the chat with the current user (saved messages) the identifier
   * of the original message from which the new message was forwarded; 0 if unknown
   */
  public forwardedFromMessageId: number
}
