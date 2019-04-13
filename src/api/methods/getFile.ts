import { FileUnion } from '../outputs'

/**
 * Returns information about a file; this is an offline request
 * @param {Object} params
 * @param {number} [params.fileId] - Identifier of the file to get
 * @param {Object} state
 * @returns {FileUnion}
 */
export type GetFileMethod = <ResponseT = FileUnion>(
  params: GetFileParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetFileParams {
  /** Identifier of the file to get */
  fileId?: number
}
