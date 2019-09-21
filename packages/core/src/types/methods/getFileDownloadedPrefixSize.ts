import { ApiRequestOptions, ApiResponse } from '../airgram'
import { CountUnion } from '../outputs'

export interface GetFileDownloadedPrefixSizeParams {
  fileId?: number // Identifier of the file
  offset?: number // Offset from which downloaded prefix size should be calculated
}

/**
 * Returns file downloaded prefix size from a given offset
 * @param {Object} params
 * @param {number} [params.fileId] - Identifier of the file
 * @param {number} [params.offset] - Offset from which downloaded prefix size should
 * be calculated
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetFileDownloadedPrefixSizeParams, CountUnion>>}
 */
export type getFileDownloadedPrefixSize = (
  params?: GetFileDownloadedPrefixSizeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetFileDownloadedPrefixSizeParams, CountUnion>>
