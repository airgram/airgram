import { ChatJoinRequestsInfo } from '@airgram/core'

/** The chat pending join requests were changed */
export class UpdateChatPendingJoinRequestsBaseModel {
  public _: 'updateChatPendingJoinRequests'

  /** Chat identifier */
  public chatId: number

  /** The new data about pending join requests; may be null */
  public pendingJoinRequests?: ChatJoinRequestsInfo
}
