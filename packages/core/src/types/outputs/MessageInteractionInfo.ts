import { MessageReplyInfo } from './index'

export type MessageInteractionInfoUnion = MessageInteractionInfo

/** Contains information about interactions with a message */
export interface MessageInteractionInfo {
  _: 'messageInteractionInfo'
  /** Number of times the message was viewed */
  viewCount: number
  /** Number of times the message was forwarded */
  forwardCount: number
  /**
   * Information about direct or indirect replies to the message; may be null. Currently,
   * available only in channels with a discussion supergroup and discussion supergroups
   * for messages, which are not replies itself
   */
  replyInfo?: MessageReplyInfo
}
