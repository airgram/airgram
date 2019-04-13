import { InputMessageContentUnion } from './index'

export type DraftMessageUnion = DraftMessage

/** Contains information about a message draft */
export interface DraftMessage {
  _: 'draftMessage'
  /** Identifier of the message to reply to; 0 if none */
  replyToMessageId: number
  /** Content of the message draft; this should always be of type inputMessageText */
  inputMessageText: InputMessageContentUnion
}
