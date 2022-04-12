import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface RemoveFileFromDownloadsParams {
  fileId?: number // Identifier of the downloaded file
  deleteFromCache?: boolean // Pass true to delete the file from the TDLib file cache
}

/**
 * Removes a file from the file download list
 * @param {Object} params
 * @param {number} [params.fileId] - Identifier of the downloaded file
 * @param {boolean} [params.deleteFromCache] - Pass true to delete the file from
 * the TDLib file cache
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RemoveFileFromDownloadsParams, OkUnion>>}
 */
export type removeFileFromDownloads = (
  params?: RemoveFileFromDownloadsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<RemoveFileFromDownloadsParams, OkUnion>>
