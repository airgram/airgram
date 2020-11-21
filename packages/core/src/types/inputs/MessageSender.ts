/** Contains information about the sender of a message */
export type MessageSenderInputUnion = MessageSenderUserInput
  | MessageSenderChatInput

/** The message was sent by a known user */
export interface MessageSenderUserInput {
  _: 'messageSenderUser'
  /** Identifier of the user that sent the message */
  userId?: number
}

/** The message was sent on behalf of a chat */
export interface MessageSenderChatInput {
  _: 'messageSenderChat'
  /** Identifier of the chat that sent the message */
  chatId?: number
}
