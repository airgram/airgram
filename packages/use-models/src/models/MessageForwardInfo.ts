import { MessageForwardOriginUnion } from '@airgram/core'

/** Contains information about a forwarded message */
export class MessageForwardInfoBaseModel {
  public _: 'messageForwardInfo'

  /** Origin of a forwarded message */
  public origin: MessageForwardOriginUnion

  /** Point in time (Unix timestamp) when the message was originally sent */
  public date: number

  /**
   * For messages forwarded to the chat with the current user (saved messages) or to the
   * channel discussion supergroup, the identifier of the chat from which the message
   * was forwarded last time; 0 if unknown
   */
  public fromChatId: number

  /**
   * For messages forwarded to the chat with the current user (saved messages) or to the
   * channel discussion supergroup, the identifier of the original message from which
   * the new message was forwarded last time; 0 if unknown
   */
  public fromMessageId: number
}
