import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageSenderInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetGroupCallParticipantVolumeLevelParams {
  groupCallId?: number // Group call identifier
  participantId?: MessageSenderInputUnion // Participant identifier
  volumeLevel?: number // New participant's volume level; 1-20000 in hundreds of percents
}

/**
 * Changes volume level of a participant of an active group call. If the current user
 * can manage the group call, then the participant's volume level will be changed for
 * all users with the default volume level
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {MessageSenderInputUnion} [params.participantId] - Participant identifier
 * @param {number} [params.volumeLevel] - New participant's volume level; 1-20000
 * in hundreds of percents
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetGroupCallParticipantVolumeLevelParams, OkUnion>>}
 */
export type setGroupCallParticipantVolumeLevel = (
  params?: SetGroupCallParticipantVolumeLevelParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetGroupCallParticipantVolumeLevelParams, OkUnion>>
