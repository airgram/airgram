import { ApiRequestOptions, ApiResponse } from '../airgram'
import { HttpUrlUnion } from '../outputs'

export interface GetGroupCallInviteLinkParams {
  groupCallId?: number // Group call identifier
  canSelfUnmute?: boolean // Pass true if the invite link needs to contain an invite hash, passing which to joinGroupCall would allow the invited user to unmute themselves. Requires groupCall.can_be_managed group call flag
}

/**
 * Returns invite link to a video chat in a public chat
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {boolean} [params.canSelfUnmute] - Pass true if the invite link needs to
 * contain an invite hash, passing which to joinGroupCall would allow the invited user
 * to unmute themselves. Requires groupCall.can_be_managed group call flag
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetGroupCallInviteLinkParams, HttpUrlUnion>>}
 */
export type getGroupCallInviteLink = (
  params?: GetGroupCallInviteLinkParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetGroupCallInviteLinkParams, HttpUrlUnion>>
