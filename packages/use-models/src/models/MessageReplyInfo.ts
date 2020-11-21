import { MessageSenderUnion } from '@airgram/core'

/** Contains information about replies to a message */
export class MessageReplyInfoBaseModel {
  public _: 'messageReplyInfo'

  /** Number of times the message was directly or indirectly replied */
  public replyCount: number

  /** Recent repliers to the message; available in channels with a discussion supergroup */
  public recentRepliers: MessageSenderUnion[]

  /** Identifier of the last read incoming reply to the message */
  public lastReadInboxMessageId: number

  /** Identifier of the last read outgoing reply to the message */
  public lastReadOutboxMessageId: number

  /** Identifier of the last reply to the message */
  public lastMessageId: number
}
