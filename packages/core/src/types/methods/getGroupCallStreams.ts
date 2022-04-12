import { ApiRequestOptions, ApiResponse } from '../airgram'
import { GroupCallStreamsUnion } from '../outputs'

export interface GetGroupCallStreamsParams {
  groupCallId?: number // Group call identifier
}

/**
 * Returns information about available group call streams
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetGroupCallStreamsParams, GroupCallStreamsUnion>>}
 */
export type getGroupCallStreams = (
  params?: GetGroupCallStreamsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetGroupCallStreamsParams, GroupCallStreamsUnion>>
