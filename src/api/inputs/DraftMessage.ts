import { InputMessageContentInputUnion } from './index'

export type DraftMessageInputUnion = DraftMessageInput

/** Contains information about a message draft */
export interface DraftMessageInput {
  _: 'draftMessage'
  /** Identifier of the message to reply to; 0 if none */
  replyToMessageId?: number
  /** Content of the message draft; this should always be of type inputMessageText */
  inputMessageText?: InputMessageContentInputUnion
}
