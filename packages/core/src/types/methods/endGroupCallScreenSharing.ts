import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface EndGroupCallScreenSharingParams {
  groupCallId?: number // Group call identifier
}

/**
 * Ends screen sharing in a joined group call
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EndGroupCallScreenSharingParams, OkUnion>>}
 */
export type endGroupCallScreenSharing = (
  params?: EndGroupCallScreenSharingParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<EndGroupCallScreenSharingParams, OkUnion>>
