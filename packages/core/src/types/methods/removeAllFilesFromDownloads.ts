import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface RemoveAllFilesFromDownloadsParams {
  onlyActive?: boolean // Pass true to remove only active downloads, including paused
  onlyCompleted?: boolean // Pass true to remove only completed downloads
  deleteFromCache?: boolean // Pass true to delete the file from the TDLib file cache
}

/**
 * Removes all files from the file download list
 * @param {Object} params
 * @param {boolean} [params.onlyActive] - Pass true to remove only active downloads,
 * including paused
 * @param {boolean} [params.onlyCompleted] - Pass true to remove only completed downloads
 * @param {boolean} [params.deleteFromCache] - Pass true to delete the file from
 * the TDLib file cache
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RemoveAllFilesFromDownloadsParams, OkUnion>>}
 */
export type removeAllFilesFromDownloads = (
  params?: RemoveAllFilesFromDownloadsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<RemoveAllFilesFromDownloadsParams, OkUnion>>
