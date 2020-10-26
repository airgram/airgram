/**
 * The message was originally written by an anonymous chat administrator on behalf of
 * the chat
 */
export class MessageForwardOriginChatBaseModel {
  public _: 'messageForwardOriginChat'

  /** Identifier of the chat that originally sent the message */
  public senderChatId: number
}
