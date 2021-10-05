import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface DiscardGroupCallParams {
  groupCallId?: number // Group call identifier
}

/**
 * Discards a group call. Requires groupCall.can_be_managed
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DiscardGroupCallParams, OkUnion>>}
 */
export type discardGroupCall = (
  params?: DiscardGroupCallParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<DiscardGroupCallParams, OkUnion>>
