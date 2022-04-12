import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ToggleAllDownloadsArePausedParams {
  arePaused?: boolean // Pass true to pause all downloads; pass false to unpause them
}

/**
 * Changes pause state of all files in the file download list
 * @param {Object} params
 * @param {boolean} [params.arePaused] - Pass true to pause all downloads; pass false
 * to unpause them
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleAllDownloadsArePausedParams, OkUnion>>}
 */
export type toggleAllDownloadsArePaused = (
  params?: ToggleAllDownloadsArePausedParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleAllDownloadsArePausedParams, OkUnion>>
