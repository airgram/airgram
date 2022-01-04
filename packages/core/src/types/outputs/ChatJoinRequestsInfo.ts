export type ChatJoinRequestsInfoUnion = ChatJoinRequestsInfo

/** Contains information about pending join requests for a chat */
export interface ChatJoinRequestsInfo {
  _: 'chatJoinRequestsInfo'
  /** Total number of pending join requests */
  totalCount: number
  /** Identifiers of at most 3 users sent the newest pending join requests */
  userIds: number[]
}
