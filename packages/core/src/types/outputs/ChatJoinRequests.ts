import { ChatJoinRequest } from './index'

export type ChatJoinRequestsUnion = ChatJoinRequests

/** Contains a list of requests to join a chat */
export interface ChatJoinRequests {
  _: 'chatJoinRequests'
  /** Approximate total count of requests found */
  totalCount: number
  /** List of the requests */
  requests: ChatJoinRequest[]
}
