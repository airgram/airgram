export type PollOptionUnion = PollOption

/** Describes one answer option of a poll */
export interface PollOption {
  _: 'pollOption'
  /** Option text; 1-100 characters */
  text: string
  /** Number of voters for this option, available only for closed or voted polls */
  voterCount: number
  /** The percentage of votes for this option; 0-100 */
  votePercentage: number
  /** True, if the option was chosen by the user */
  isChosen: boolean
  /** True, if the option is being chosen by a pending setPollAnswer request */
  isBeingChosen: boolean
}
