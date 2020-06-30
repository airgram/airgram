export type ChatStatisticsMessageInteractionCountersUnion = ChatStatisticsMessageInteractionCounters

/** Contains statistics about interactions with a message */
export interface ChatStatisticsMessageInteractionCounters {
  _: 'chatStatisticsMessageInteractionCounters'
  /** Message identifier */
  messageId: number
  /** Number of times the message was viewed */
  viewCount: number
  /** Number of times the message was forwarded */
  forwardCount: number
}
