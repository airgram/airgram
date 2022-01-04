/** The message was originally sent on behalf of a chat */
export class MessageForwardOriginChatBaseModel {
  public _: 'messageForwardOriginChat'

  /** Identifier of the chat that originally sent the message */
  public senderChatId: number

  /**
   * For messages originally sent by an anonymous chat administrator, original message
   * author signature
   */
  public authorSignature: string
}
