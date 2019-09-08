/** Contains information about the origin of a forwarded message */
export type MessageForwardOriginUnion = MessageForwardOriginUser
  | MessageForwardOriginHiddenUser
  | MessageForwardOriginChannel

/** The message was originally written by a known user */
export interface MessageForwardOriginUser {
  _: 'messageForwardOriginUser'
  /** Identifier of the user that originally sent the message */
  senderUserId: number
}

/** The message was originally written by a user, which is hidden by their privacy settings */
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
  /** Message identifier of the original message; 0 if unknown */
  messageId: number
  /** Original post author signature */
  authorSignature: string
}
