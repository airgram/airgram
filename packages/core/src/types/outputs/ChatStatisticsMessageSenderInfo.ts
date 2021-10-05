export type ChatStatisticsMessageSenderInfoUnion = ChatStatisticsMessageSenderInfo

/** Contains statistics about messages sent by a user */
export interface ChatStatisticsMessageSenderInfo {
  _: 'chatStatisticsMessageSenderInfo'
  /** User identifier */
  userId: number
  /** Number of sent messages */
  sentMessageCount: number
  /** Average number of characters in sent messages; 0 if unknown */
  averageCharacterCount: number
}
