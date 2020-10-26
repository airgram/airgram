/** Contains statistics about administrator actions done by a user */
export class ChatStatisticsAdministratorActionsInfoBaseModel {
  public _: 'chatStatisticsAdministratorActionsInfo'

  /** Administrator user identifier */
  public userId: number

  /** Number of messages deleted by the administrator */
  public deletedMessageCount: number

  /** Number of users banned by the administrator */
  public bannedUserCount: number

  /** Number of users restricted by the administrator */
  public restrictedUserCount: number
}
