import { MessageForwardOriginUnion } from './index'

export type MessageForwardInfoUnion = MessageForwardInfo

/** Contains information about a forwarded message */
export interface MessageForwardInfo {
  _: 'messageForwardInfo'
  /** Origin of a forwarded message */
  origin: MessageForwardOriginUnion
  /** Point in time (Unix timestamp) when the message was originally sent */
  date: number
  /** The type of a public service announcement for the forwarded message */
  publicServiceAnnouncementType: string
  /**
   * For messages forwarded to the chat with the current user (Saved Messages), to the
   * Replies bot chat, or to the channel's discussion group, the identifier of the chat
   * from which the message was forwarded last time; 0 if unknown
   */
  fromChatId: number
  /**
   * For messages forwarded to the chat with the current user (Saved Messages), to the
   * Replies bot chat, or to the channel's discussion group, the identifier of the original
   * message from which the new message was forwarded last time; 0 if unknown
   */
  fromMessageId: number
}
