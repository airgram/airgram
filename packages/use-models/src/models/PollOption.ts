/** Describes one answer option of a poll */
export class PollOptionBaseModel {
  public _: 'pollOption'

  /** Option text; 1-100 characters */
  public text: string

  /** Number of voters for this option, available only for closed or voted polls */
  public voterCount: number

  /** The percentage of votes for this option; 0-100 */
  public votePercentage: number

  /** True, if the option was chosen by the user */
  public isChosen: boolean

  /** True, if the option is being chosen by a pending setPollAnswer request */
  public isBeingChosen: boolean
}
