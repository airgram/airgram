import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ToggleGroupCallIsMyVideoEnabledParams {
  groupCallId?: number // Group call identifier
  isMyVideoEnabled?: boolean // Pass true if the current user's video is enabled
}

/**
 * Toggles whether current user's video is enabled
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {boolean} [params.isMyVideoEnabled] - Pass true if the current user's video
 * is enabled
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleGroupCallIsMyVideoEnabledParams, OkUnion>>}
 */
export type toggleGroupCallIsMyVideoEnabled = (
  params?: ToggleGroupCallIsMyVideoEnabledParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleGroupCallIsMyVideoEnabledParams, OkUnion>>
