import { OkUnion } from '../outputs'

/**
 * Stops the uploading of a file. Supported only for files uploaded by using uploadFile.
 * For other files the behavior is undefined
 * @param {Object} params
 * @param {number} [params.fileId] - Identifier of the file to stop uploading
 * @param {Object} state
 * @returns {OkUnion}
 */
export type CancelUploadFileMethod = <ResponseT = OkUnion>(
  params: CancelUploadFileParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CancelUploadFileParams {
  /** Identifier of the file to stop uploading */
  fileId?: number
}
