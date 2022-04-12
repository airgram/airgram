import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ToggleDownloadIsPausedParams {
  fileId?: number // Identifier of the downloaded file
  isPaused?: boolean // Pass true if the download is paused
}

/**
 * Changes pause state of a file in the file download list
 * @param {Object} params
 * @param {number} [params.fileId] - Identifier of the downloaded file
 * @param {boolean} [params.isPaused] - Pass true if the download is paused
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleDownloadIsPausedParams, OkUnion>>}
 */
export type toggleDownloadIsPaused = (
  params?: ToggleDownloadIsPausedParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleDownloadIsPausedParams, OkUnion>>
