import { DraftMessage, Message, MessageReplyInfo } from '@airgram/core'

/** Contains information about a message thread */
export class MessageThreadInfoBaseModel {
  public _: 'messageThreadInfo'

  /** Identifier of the chat to which the message thread belongs */
  public chatId: number

  /** Message thread identifier, unique within the chat */
  public messageThreadId: number

  /** Information about the message thread */
  public replyInfo: MessageReplyInfo

  /** Approximate number of unread messages in the message thread */
  public unreadMessageCount: number

  /**
   * The messages from which the thread starts. The messages are returned in a reverse
   * chronological order (i.e., in order of decreasing message_id)
   */
  public messages: Message[]

  /** A draft of a message in the message thread; may be null */
  public draftMessage?: DraftMessage
}
