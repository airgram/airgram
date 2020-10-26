export type ChatStatisticsAdministratorActionsInfoUnion = ChatStatisticsAdministratorActionsInfo

/** Contains statistics about administrator actions done by a user */
export interface ChatStatisticsAdministratorActionsInfo {
  _: 'chatStatisticsAdministratorActionsInfo'
  /** Administrator user identifier */
  userId: number
  /** Number of messages deleted by the administrator */
  deletedMessageCount: number
  /** Number of users banned by the administrator */
  bannedUserCount: number
  /** Number of users restricted by the administrator */
  restrictedUserCount: number
}
