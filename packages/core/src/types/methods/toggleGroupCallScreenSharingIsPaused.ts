import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ToggleGroupCallScreenSharingIsPausedParams {
  groupCallId?: number // Group call identifier
  isPaused?: boolean // True if screen sharing is paused
}

/**
 * Pauses or unpauses screen sharing in a joined group call
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {boolean} [params.isPaused] - True if screen sharing is paused
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleGroupCallScreenSharingIsPausedParams, OkUnion>>}
 */
export type toggleGroupCallScreenSharingIsPaused = (
  params?: ToggleGroupCallScreenSharingIsPausedParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleGroupCallScreenSharingIsPausedParams, OkUnion>>
