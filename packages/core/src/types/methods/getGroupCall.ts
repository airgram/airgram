import { ApiRequestOptions, ApiResponse } from '../airgram'
import { GroupCallUnion } from '../outputs'

export interface GetGroupCallParams {
  groupCallId?: number // Group call identifier
}

/**
 * Returns information about a group call
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetGroupCallParams, GroupCallUnion>>}
 */
export type getGroupCall = (
  params?: GetGroupCallParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetGroupCallParams, GroupCallUnion>>
