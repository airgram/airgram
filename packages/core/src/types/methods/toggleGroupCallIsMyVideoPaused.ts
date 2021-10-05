import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ToggleGroupCallIsMyVideoPausedParams {
  groupCallId?: number // Group call identifier
  isMyVideoPaused?: boolean // Pass true if the current user's video is paused
}

/**
 * Toggles whether current user's video is paused
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {boolean} [params.isMyVideoPaused] - Pass true if the current user's video
 * is paused
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleGroupCallIsMyVideoPausedParams, OkUnion>>}
 */
export type toggleGroupCallIsMyVideoPaused = (
  params?: ToggleGroupCallIsMyVideoPausedParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleGroupCallIsMyVideoPausedParams, OkUnion>>
