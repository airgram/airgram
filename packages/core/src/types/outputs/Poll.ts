import { PollOption, PollTypeUnion } from './index'

export type PollUnion = Poll

/** Describes a poll */
export interface Poll {
  _: 'poll'
  /** Unique poll identifier */
  id: string
  /** Poll question, 1-300 characters */
  question: string
  /** List of poll answer options */
  options: PollOption[]
  /** Total number of voters, participating in the poll */
  totalVoterCount: number
  /** User identifiers of recent voters, if the poll is non-anonymous */
  recentVoterUserIds: number[]
  /** True, if the poll is anonymous */
  isAnonymous: boolean
  /** Type of the poll */
  type: PollTypeUnion
  /** Amount of time the poll will be active after creation, in seconds */
  openPeriod: number
  /** Point in time (Unix timestamp) when the poll will be automatically closed */
  closeDate: number
  /** True, if the poll is closed */
  isClosed: boolean
}
