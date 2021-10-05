/** The message was originally a post in a channel */
export class MessageForwardOriginChannelBaseModel {
  public _: 'messageForwardOriginChannel'

  /** Identifier of the chat from which the message was originally forwarded */
  public chatId: number

  /** Message identifier of the original message */
  public messageId: number

  /** Original post author signature */
  public authorSignature: string
}
