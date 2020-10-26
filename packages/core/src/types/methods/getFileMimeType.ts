import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TextUnion } from '../outputs'

export interface GetFileMimeTypeParams {
  fileName?: string // The name of the file or path to the file
}

/**
 * Returns the MIME type of a file, guessed by its extension. Returns an empty string
 * on failure. Can be called synchronously
 * @param {Object} params
 * @param {string} [params.fileName] - The name of the file or path to the file
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetFileMimeTypeParams, TextUnion>>}
 */
export type getFileMimeType = (
  params?: GetFileMimeTypeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetFileMimeTypeParams, TextUnion>>

export type getFileMimeTypeSync = (params?: GetFileMimeTypeParams) => TextUnion
