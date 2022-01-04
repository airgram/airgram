import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface LoadGroupCallParticipantsParams {
  groupCallId?: number // Group call identifier. The group call must be previously received through getGroupCall and must be joined or being joined
  limit?: number // The maximum number of participants to load; up to 100
}

/**
 * Loads more participants of a group call. The loaded participants will be received
 * through updates. Use the field groupCall.loaded_all_participants to check whether
 * all participants have already been loaded
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier. The group call must
 * be previously received through getGroupCall and must be joined or being joined
 * @param {number} [params.limit] - The maximum number of participants to load; up
 * to 100
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<LoadGroupCallParticipantsParams, OkUnion>>}
 */
export type loadGroupCallParticipants = (
  params?: LoadGroupCallParticipantsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<LoadGroupCallParticipantsParams, OkUnion>>
