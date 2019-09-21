import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface DeleteFileParams {
  fileId?: number // Identifier of the file to delete
}

/**
 * Deletes a file from the TDLib file cache
 * @param {Object} params
 * @param {number} [params.fileId] - Identifier of the file to delete
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DeleteFileParams, OkUnion>>}
 */
export type deleteFile = (
  params?: DeleteFileParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<DeleteFileParams, OkUnion>>
