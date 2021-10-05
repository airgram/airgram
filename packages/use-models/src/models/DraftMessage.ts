import { InputMessageContentUnion } from '@airgram/core'

/** Contains information about a message draft */
export class DraftMessageBaseModel {
  public _: 'draftMessage'

  /** Identifier of the message to reply to; 0 if none */
  public replyToMessageId: number

  /** Point in time (Unix timestamp) when the draft was created */
  public date: number

  /** Content of the message draft; must be of the type inputMessageText */
  public inputMessageText: InputMessageContentUnion
}
