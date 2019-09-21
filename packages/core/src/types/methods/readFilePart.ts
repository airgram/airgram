import { ApiRequestOptions, ApiResponse } from '../airgram'
import { FilePartUnion } from '../outputs'

export interface ReadFilePartParams {
  fileId?: number // Identifier of the file. The file must be located in the TDLib file cache
  offset?: number // The offset from which to read the file
  count?: number // Number of bytes to read. An error will be returned if there are not enough bytes available in the file from the specified position. Pass 0 to read all available data from the specified position
}

/**
 * Reads a part of a file from the TDLib file cache and returns read bytes. This method
 * is intended to be used only if the client has no direct access to TDLib's file system,
 * because it is usually slower than a direct read from the file
 * @param {Object} params
 * @param {number} [params.fileId] - Identifier of the file. The file must be located
 * in the TDLib file cache
 * @param {number} [params.offset] - The offset from which to read the file
 * @param {number} [params.count] - Number of bytes to read. An error will be returned
 * if there are not enough bytes available in the file from the specified position.
 * Pass 0 to read all available data from the specified position
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ReadFilePartParams, FilePartUnion>>}
 */
export type readFilePart = (
  params?: ReadFilePartParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ReadFilePartParams, FilePartUnion>>
