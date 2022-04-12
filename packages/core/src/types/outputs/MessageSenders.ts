import { MessageSenderUnion } from './index'

export type MessageSendersUnion = MessageSenders

/** Represents a list of message senders */
export interface MessageSenders {
  _: 'messageSenders'
  /** Approximate total number of messages senders found */
  totalCount: number
  /** List of message senders */
  senders: MessageSenderUnion[]
}
