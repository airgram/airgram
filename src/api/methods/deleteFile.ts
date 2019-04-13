import { OkUnion } from '../outputs'

/**
 * Deletes a file from the TDLib file cache
 * @param {Object} params
 * @param {number} [params.fileId] - Identifier of the file to delete
 * @param {Object} state
 * @returns {OkUnion}
 */
export type DeleteFileMethod = <ResponseT = OkUnion>(
  params: DeleteFileParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface DeleteFileParams {
  /** Identifier of the file to delete */
  fileId?: number
}
