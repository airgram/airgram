/**
 * The message was originally sent by an anonymous chat administrator on behalf of the
 * chat
 */
export class MessageForwardOriginChatBaseModel {
  public _: 'messageForwardOriginChat'

  /** Identifier of the chat that originally sent the message */
  public senderChatId: number

  /** Original message author signature */
  public authorSignature: string
}
