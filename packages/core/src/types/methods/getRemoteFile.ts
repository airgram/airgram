import { ApiRequestOptions, ApiResponse } from '../airgram'
import { FileTypeInputUnion } from '../inputs'
import { FileUnion } from '../outputs'

export interface GetRemoteFileParams {
  remoteFileId?: string // Remote identifier of the file to get
  fileType?: FileTypeInputUnion // File type, if known
}

/**
 * Returns information about a file by its remote ID; this is an offline request. Can
 * be used to register a URL as a file for further uploading, or sending as a message
 * @param {Object} params
 * @param {string} [params.remoteFileId] - Remote identifier of the file to get
 * @param {FileTypeInputUnion} [params.fileType] - File type, if known
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetRemoteFileParams, FileUnion>>}
 */
export type getRemoteFile<ExtensionT> = (
  params?: GetRemoteFileParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetRemoteFileParams, FileUnion> & ExtensionT>
