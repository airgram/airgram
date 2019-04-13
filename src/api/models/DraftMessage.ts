import { InputMessageContentUnion } from '../outputs'

/** Contains information about a message draft */
export class DraftMessageBaseModel {
  public _: 'draftMessage'
  /** Identifier of the message to reply to; 0 if none */
  public replyToMessageId: number
  /** Content of the message draft; this should always be of type inputMessageText */
  public inputMessageText: InputMessageContentUnion
}
