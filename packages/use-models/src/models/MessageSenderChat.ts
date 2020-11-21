/** The message was sent on behalf of a chat */
export class MessageSenderChatBaseModel {
  public _: 'messageSenderChat'

  /** Identifier of the chat that sent the message */
  public chatId: number
}
