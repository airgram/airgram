import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface LeaveGroupCallParams {
  groupCallId?: number // Group call identifier
}

/**
 * Leaves a group call
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<LeaveGroupCallParams, OkUnion>>}
 */
export type leaveGroupCall = (
  params?: LeaveGroupCallParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<LeaveGroupCallParams, OkUnion>>
