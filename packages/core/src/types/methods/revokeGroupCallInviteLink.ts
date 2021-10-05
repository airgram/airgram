import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface RevokeGroupCallInviteLinkParams {
  groupCallId?: number // Group call identifier
}

/**
 * Revokes invite link for a group call. Requires groupCall.can_be_managed group call
 * flag
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RevokeGroupCallInviteLinkParams, OkUnion>>}
 */
export type revokeGroupCallInviteLink = (
  params?: RevokeGroupCallInviteLinkParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<RevokeGroupCallInviteLinkParams, OkUnion>>
