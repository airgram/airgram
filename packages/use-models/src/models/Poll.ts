import { PollOption, PollTypeUnion } from '@airgram/core'

/** Describes a poll */
export class PollBaseModel {
  public _: 'poll'

  /** Unique poll identifier */
  public id: string

  /** Poll question, 1-300 characters */
  public question: string

  /** List of poll answer options */
  public options: PollOption[]

  /** Total number of voters, participating in the poll */
  public totalVoterCount: number

  /** User identifiers of recent voters, if the poll is non-anonymous */
  public recentVoterUserIds: number[]

  /** True, if the poll is anonymous */
  public isAnonymous: boolean

  /** Type of the poll */
  public type: PollTypeUnion

  /** Amount of time the poll will be active after creation, in seconds */
  public openPeriod: number

  /** Point in time (Unix timestamp) when the poll will be automatically closed */
  public closeDate: number

  /** True, if the poll is closed */
  public isClosed: boolean
}
