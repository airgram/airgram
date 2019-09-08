import { PollOption } from '@airgram/core'

/** Describes a poll */
export class PollBaseModel {
  public _: 'poll'

  /** Unique poll identifier */
  public id: string

  /** Poll question, 1-255 characters */
  public question: string

  /** List of poll answer options */
  public options: PollOption[]

  /** Total number of voters, participating in the poll */
  public totalVoterCount: number

  /** True, if the poll is closed */
  public isClosed: boolean
}
