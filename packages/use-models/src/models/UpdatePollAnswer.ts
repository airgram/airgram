/** A user changed the answer to a poll; for bots only */
export class UpdatePollAnswerBaseModel {
  public _: 'updatePollAnswer'

  /** Unique poll identifier */
  public pollId: string

  /** The user, who changed the answer to the poll */
  public userId: number

  /** 0-based identifiers of answer options, chosen by the user */
  public optionIds: number[]
}
