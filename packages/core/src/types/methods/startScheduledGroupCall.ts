import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface StartScheduledGroupCallParams {
  groupCallId?: number // Group call identifier
}

/**
 * Starts a scheduled group call
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<StartScheduledGroupCallParams, OkUnion>>}
 */
export type startScheduledGroupCall = (
  params?: StartScheduledGroupCallParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<StartScheduledGroupCallParams, OkUnion>>
