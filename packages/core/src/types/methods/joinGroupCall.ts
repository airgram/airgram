import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageSenderInputUnion } from '../inputs'
import { TextUnion } from '../outputs'

export interface JoinGroupCallParams {
  groupCallId?: number // Group call identifier
  participantId?: MessageSenderInputUnion // Identifier of a group call participant, which will be used to join the call; pass null to join as self; video chats only
  audioSourceId?: number // Caller audio channel synchronization source identifier; received from tgcalls
  payload?: string // Group call join payload; received from tgcalls
  isMuted?: boolean // Pass true to join the call with muted microphone
  isMyVideoEnabled?: boolean // Pass true if the user's video is enabled
  inviteHash?: string // If non-empty, invite hash to be used to join the group call without being muted by administrators
}

/**
 * Joins an active group call. Returns join response payload for tgcalls
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {MessageSenderInputUnion} [params.participantId] - Identifier of a group
 * call participant, which will be used to join the call; pass null to join as self;
 * video chats only
 * @param {number} [params.audioSourceId] - Caller audio channel synchronization
 * source identifier; received from tgcalls
 * @param {string} [params.payload] - Group call join payload; received from tgcalls
 * @param {boolean} [params.isMuted] - Pass true to join the call with muted microphone
 * @param {boolean} [params.isMyVideoEnabled] - Pass true if the user's video is
 * enabled
 * @param {string} [params.inviteHash] - If non-empty, invite hash to be used to
 * join the group call without being muted by administrators
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<JoinGroupCallParams, TextUnion>>}
 */
export type joinGroupCall = (
  params?: JoinGroupCallParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<JoinGroupCallParams, TextUnion>>
