import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetGroupCallParticipantIsSpeakingParams {
  groupCallId?: number // Group call identifier
  audioSource?: number // Group call participant's synchronization audio source identifier, or 0 for the current user
  isSpeaking?: boolean // Pass true if the user is speaking
}

/**
 * Informs TDLib that speaking state of a participant of an active group has changed
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {number} [params.audioSource] - Group call participant's synchronization
 * audio source identifier, or 0 for the current user
 * @param {boolean} [params.isSpeaking] - Pass true if the user is speaking
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetGroupCallParticipantIsSpeakingParams, OkUnion>>}
 */
export type setGroupCallParticipantIsSpeaking = (
  params?: SetGroupCallParticipantIsSpeakingParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetGroupCallParticipantIsSpeakingParams, OkUnion>>
