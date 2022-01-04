/** Contains information about pending join requests for a chat */
export class ChatJoinRequestsInfoBaseModel {
  public _: 'chatJoinRequestsInfo'

  /** Total number of pending join requests */
  public totalCount: number

  /** Identifiers of at most 3 users sent the newest pending join requests */
  public userIds: number[]
}
