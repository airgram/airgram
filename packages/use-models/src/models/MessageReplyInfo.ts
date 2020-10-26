/** Contains information about message replies */
export class MessageReplyInfoBaseModel {
  public _: 'messageReplyInfo'

  /** Number of times the message was directly or indirectly replied */
  public replyCount: number

  /**
   * User identifiers of the recent repliers to the message; available in channels with
   * a discussion supergroup
   */
  public recentReplierUserIds: number[]

  /** Identifier of the last read incoming reply to the message */
  public lastReadInboxMessageId: number

  /** Identifier of the last read outgoing reply to the message */
  public lastReadOutboxMessageId: number

  /** Identifier of the last reply to the message */
  public lastMessageId: number
}
