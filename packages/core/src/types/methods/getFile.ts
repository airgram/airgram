import { ApiRequestOptions, ApiResponse } from '../airgram'
import { FileUnion } from '../outputs'

export interface GetFileParams {
  fileId?: number // Identifier of the file to get
}

/**
 * Returns information about a file; this is an offline request
 * @param {Object} params
 * @param {number} [params.fileId] - Identifier of the file to get
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetFileParams, FileUnion>>}
 */
export type getFile = (
  params?: GetFileParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetFileParams, FileUnion>>
