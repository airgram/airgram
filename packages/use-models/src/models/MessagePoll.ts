import { Poll } from '@airgram/core'

/** A message with a poll */
export class MessagePollBaseModel {
  public _: 'messagePoll'

  /** The poll description */
  public poll: Poll
}
