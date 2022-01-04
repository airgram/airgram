import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface EndGroupCallParams {
  groupCallId?: number // Group call identifier
}

/**
 * Ends a group call. Requires groupCall.can_be_managed
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EndGroupCallParams, OkUnion>>}
 */
export type endGroupCall = (
  params?: EndGroupCallParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<EndGroupCallParams, OkUnion>>
