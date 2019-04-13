/** Contains information about the initial sender of a forwarded message */
export type MessageForwardInfoUnion = MessageForwardedFromUser
  | MessageForwardedPost

/** The message was originally written by a known user */
export interface MessageForwardedFromUser {
  _: 'messageForwardedFromUser'
  /** Identifier of the user that originally sent this message */
  senderUserId: number
  /** Point in time (Unix timestamp) when the message was originally sent */
  date: number
  /**
   * For messages forwarded to the chat with the current user (saved messages), the identifier
   * of the chat from which the message was forwarded; 0 if unknown
   */
  forwardedFromChatId: number
  /**
   * For messages forwarded to the chat with the current user (saved messages) the identifier
   * of the original message from which the new message was forwarded; 0 if unknown
   */
  forwardedFromMessageId: number
}

/** The message was originally a post in a channel */
export interface MessageForwardedPost {
  _: 'messageForwardedPost'
  /** Identifier of the chat from which the message was forwarded */
  chatId: number
  /** Post author signature */
  authorSignature: string
  /** Point in time (Unix timestamp) when the message was originally sent */
  date: number
  /**
   * Message identifier of the original message from which the new message was forwarded;
   * 0 if unknown
   */
  messageId: number
  /**
   * For messages forwarded to the chat with the current user (saved messages), the identifier
   * of the chat from which the message was forwarded; 0 if unknown
   */
  forwardedFromChatId: number
  /**
   * For messages forwarded to the chat with the current user (saved messages), the identifier
   * of the original message from which the new message was forwarded; 0 if unknown
   */
  forwardedFromMessageId: number
}
