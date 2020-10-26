export type MessageReplyInfoUnion = MessageReplyInfo

/** Contains information about message replies */
export interface MessageReplyInfo {
  _: 'messageReplyInfo'
  /** Number of times the message was directly or indirectly replied */
  replyCount: number
  /**
   * User identifiers of the recent repliers to the message; available in channels with
   * a discussion supergroup
   */
  recentReplierUserIds: number[]
  /** Identifier of the last read incoming reply to the message */
  lastReadInboxMessageId: number
  /** Identifier of the last read outgoing reply to the message */
  lastReadOutboxMessageId: number
  /** Identifier of the last reply to the message */
  lastMessageId: number
}
