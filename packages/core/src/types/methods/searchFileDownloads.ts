import { ApiRequestOptions, ApiResponse } from '../airgram'
import { FoundFileDownloadsUnion } from '../outputs'

export interface SearchFileDownloadsParams {
  query?: string // Query to search for; may be empty to return all downloaded files
  onlyActive?: boolean // Pass true to search only for active downloads, including paused
  onlyCompleted?: boolean // Pass true to search only for completed downloads
  offset?: string // Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results
  limit?: number // The maximum number of files to be returned
}

/**
 * Searches for files in the file download list or recently downloaded files from the
 * list
 * @param {Object} params
 * @param {string} [params.query] - Query to search for; may be empty to return all
 * downloaded files
 * @param {boolean} [params.onlyActive] - Pass true to search only for active downloads,
 * including paused
 * @param {boolean} [params.onlyCompleted] - Pass true to search only for completed
 * downloads
 * @param {string} [params.offset] - Offset of the first entry to return as received
 * from the previous request; use empty string to get the first chunk of results
 * @param {number} [params.limit] - The maximum number of files to be returned
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchFileDownloadsParams, FoundFileDownloadsUnion>>}
 */
export type searchFileDownloads = (
  params?: SearchFileDownloadsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchFileDownloadsParams, FoundFileDownloadsUnion>>
