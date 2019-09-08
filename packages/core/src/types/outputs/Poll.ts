import { PollOption } from './index'

export type PollUnion = Poll

/** Describes a poll */
export interface Poll {
  _: 'poll'
  /** Unique poll identifier */
  id: string
  /** Poll question, 1-255 characters */
  question: string
  /** List of poll answer options */
  options: PollOption[]
  /** Total number of voters, participating in the poll */
  totalVoterCount: number
  /** True, if the poll is closed */
  isClosed: boolean
}
