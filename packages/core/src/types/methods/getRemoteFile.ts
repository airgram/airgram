import { ApiRequestOptions, ApiResponse } from '../airgram'
import { FileTypeInputUnion } from '../inputs'
import { FileUnion } from '../outputs'

export interface GetRemoteFileParams {
  remoteFileId?: string // Remote identifier of the file to get
  fileType?: FileTypeInputUnion // File type, if known
}

/**
 * Returns information about a file by its remote ID; this is an offline request. Can
 * be used to register a URL as a file for further uploading, or sending as a message.
 * Even the request succeeds, the file can be used only if it is still accessible to
 * the user. For example, if the file is from a message, then the message must be not
 * deleted and accessible to the user. If the file database is disabled, then the corresponding
 * object with the file must be preloaded by the client
 * @param {Object} params
 * @param {string} [params.remoteFileId] - Remote identifier of the file to get
 * @param {FileTypeInputUnion} [params.fileType] - File type, if known
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetRemoteFileParams, FileUnion>>}
 */
export type getRemoteFile = (
  params?: GetRemoteFileParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetRemoteFileParams, FileUnion>>
