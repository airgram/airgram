import { DraftMessage, Message, MessageReplyInfo } from './index'

export type MessageThreadInfoUnion = MessageThreadInfo

/** Contains information about a message thread */
export interface MessageThreadInfo {
  _: 'messageThreadInfo'
  /** Identifier of the chat to which the message thread belongs */
  chatId: number
  /** Message thread identifier, unique within the chat */
  messageThreadId: number
  /** Information about the message thread */
  replyInfo: MessageReplyInfo
  /** Approximate number of unread messages in the message thread */
  unreadMessageCount: number
  /**
   * The messages from which the thread starts. The messages are returned in a reverse
   * chronological order (i.e., in order of decreasing message_id)
   */
  messages: Message[]
  /** A draft of a message in the message thread; may be null */
  draftMessage?: DraftMessage
}
