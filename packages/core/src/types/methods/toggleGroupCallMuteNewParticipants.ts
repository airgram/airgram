import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ToggleGroupCallMuteNewParticipantsParams {
  groupCallId?: number // Group call identifier
  muteNewParticipants?: boolean // New value of the mute_new_participants setting
}

/**
 * Toggles whether new participants of a group call can be unmuted only by administrators
 * of the group call. Requires groupCall.can_toggle_mute_new_participants group call
 * flag
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {boolean} [params.muteNewParticipants] - New value of the mute_new_participants
 * setting
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleGroupCallMuteNewParticipantsParams, OkUnion>>}
 */
export type toggleGroupCallMuteNewParticipants = (
  params?: ToggleGroupCallMuteNewParticipantsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleGroupCallMuteNewParticipantsParams, OkUnion>>
