import { PollTypeUnion } from '@airgram/core'

/**
 * A message with a poll. Polls can't be sent to secret chats. Polls can be sent only
 * to a private chat with a bot
 */
export class InputMessagePollBaseModel {
  public _: 'inputMessagePoll'

  /** Poll question; 1-255 characters (up to 300 characters for bots) */
  public question: string

  /** List of poll answer options, 2-10 strings 1-100 characters each */
  public options: string[]

  /**
   * True, if the poll voters are anonymous. Non-anonymous polls can't be sent or forwarded
   * to channels
   */
  public isAnonymous: boolean

  /** Type of the poll */
  public type: PollTypeUnion

  /** Amount of time the poll will be active after creation, in seconds; for bots only */
  public openPeriod: number

  /**
   * Point in time (Unix timestamp) when the poll will automatically be closed; for bots
   * only
   */
  public closeDate: number

  /** True, if the poll needs to be sent already closed; for bots only */
  public isClosed: boolean
}
