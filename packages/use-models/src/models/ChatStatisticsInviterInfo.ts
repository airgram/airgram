/** Contains statistics about number of new members invited by a user */
export class ChatStatisticsInviterInfoBaseModel {
  public _: 'chatStatisticsInviterInfo'

  /** User identifier */
  public userId: number

  /** Number of new members invited by the user */
  public addedMemberCount: number
}
