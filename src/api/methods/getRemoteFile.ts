import { FileTypeInputUnion } from '../inputs'
import { FileUnion } from '../outputs'

/**
 * Returns information about a file by its remote ID; this is an offline request. Can
 * be used to register a URL as a file for further uploading, or sending as a message
 * @param {Object} params
 * @param {string} [params.remoteFileId] - Remote identifier of the file to get
 * @param {FileTypeInputUnion} [params.fileType] - File type, if known
 * @param {Object} state
 * @returns {FileUnion}
 */
export type GetRemoteFileMethod = <ResponseT = FileUnion>(
  params: GetRemoteFileParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetRemoteFileParams {
  /** Remote identifier of the file to get */
  remoteFileId?: string
  /** File type, if known */
  fileType?: FileTypeInputUnion
}
