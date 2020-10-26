export type ChatStatisticsMessageInteractionInfoUnion = ChatStatisticsMessageInteractionInfo

/** Contains statistics about interactions with a message */
export interface ChatStatisticsMessageInteractionInfo {
  _: 'chatStatisticsMessageInteractionInfo'
  /** Message identifier */
  messageId: number
  /** Number of times the message was viewed */
  viewCount: number
  /** Number of times the message was forwarded */
  forwardCount: number
}
