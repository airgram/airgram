import { ChatJoinRequest } from '@airgram/core'

/** Contains a list of requests to join a chat */
export class ChatJoinRequestsBaseModel {
  public _: 'chatJoinRequests'

  /** Approximate total number of requests found */
  public totalCount: number

  /** List of the requests */
  public requests: ChatJoinRequest[]
}
