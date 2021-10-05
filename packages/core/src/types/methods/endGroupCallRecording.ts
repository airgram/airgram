import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface EndGroupCallRecordingParams {
  groupCallId?: number // Group call identifier
}

/**
 * Ends recording of an active group call. Requires groupCall.can_be_managed group call
 * flag
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EndGroupCallRecordingParams, OkUnion>>}
 */
export type endGroupCallRecording = (
  params?: EndGroupCallRecordingParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<EndGroupCallRecordingParams, OkUnion>>
