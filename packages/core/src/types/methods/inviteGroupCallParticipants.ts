import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface InviteGroupCallParticipantsParams {
  groupCallId?: number // Group call identifier
  userIds?: number[] // User identifiers. At most 10 users can be invited simultaneously
}

/**
 * Invites users to an active group call. Sends a service message of type messageInviteToGroupCall
 * for voice chats
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {number[]} [params.userIds] - User identifiers. At most 10 users can be
 * invited simultaneously
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<InviteGroupCallParticipantsParams, OkUnion>>}
 */
export type inviteGroupCallParticipants = (
  params?: InviteGroupCallParticipantsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<InviteGroupCallParticipantsParams, OkUnion>>
