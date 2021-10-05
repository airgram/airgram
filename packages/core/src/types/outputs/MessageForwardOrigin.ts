/** Contains information about the origin of a forwarded message */
export type MessageForwardOriginUnion = MessageForwardOriginUser
  | MessageForwardOriginChat
  | MessageForwardOriginHiddenUser
  | MessageForwardOriginChannel
  | MessageForwardOriginMessageImport

/** The message was originally sent by a known user */
export interface MessageForwardOriginUser {
  _: 'messageForwardOriginUser'
  /** Identifier of the user that originally sent the message */
  senderUserId: number
}

/**
 * The message was originally sent by an anonymous chat administrator on behalf of the
 * chat
 */
export interface MessageForwardOriginChat {
  _: 'messageForwardOriginChat'
  /** Identifier of the chat that originally sent the message */
  senderChatId: number
  /** Original message author signature */
  authorSignature: string
}

/** The message was originally sent by a user, which is hidden by their privacy settings */
export interface MessageForwardOriginHiddenUser {
  _: 'messageForwardOriginHiddenUser'
  /** Name of the sender */
  senderName: string
}

/** The message was originally a post in a channel */
export interface MessageForwardOriginChannel {
  _: 'messageForwardOriginChannel'
  /** Identifier of the chat from which the message was originally forwarded */
  chatId: number
  /** Message identifier of the original message */
  messageId: number
  /** Original post author signature */
  authorSignature: string
}

/** The message was imported from an exported message history */
export interface MessageForwardOriginMessageImport {
  _: 'messageForwardOriginMessageImport'
  /** Name of the sender */
  senderName: string
}
