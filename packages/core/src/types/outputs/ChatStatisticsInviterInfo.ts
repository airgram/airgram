export type ChatStatisticsInviterInfoUnion = ChatStatisticsInviterInfo

/** Contains statistics about number of new members invited by a user */
export interface ChatStatisticsInviterInfo {
  _: 'chatStatisticsInviterInfo'
  /** User identifier */
  userId: number
  /** Number of new members invited by the user */
  addedMemberCount: number
}
