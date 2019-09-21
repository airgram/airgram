import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface CancelUploadFileParams {
  fileId?: number // Identifier of the file to stop uploading
}

/**
 * Stops the uploading of a file. Supported only for files uploaded by using uploadFile.
 * For other files the behavior is undefined
 * @param {Object} params
 * @param {number} [params.fileId] - Identifier of the file to stop uploading
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CancelUploadFileParams, OkUnion>>}
 */
export type cancelUploadFile = (
  params?: CancelUploadFileParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CancelUploadFileParams, OkUnion>>
