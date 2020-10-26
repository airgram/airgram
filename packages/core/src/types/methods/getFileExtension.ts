import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TextUnion } from '../outputs'

export interface GetFileExtensionParams {
  mimeType?: string // The MIME type of the file
}

/**
 * Returns the extension of a file, guessed by its MIME type. Returns an empty string
 * on failure. Can be called synchronously
 * @param {Object} params
 * @param {string} [params.mimeType] - The MIME type of the file
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetFileExtensionParams, TextUnion>>}
 */
export type getFileExtension = (
  params?: GetFileExtensionParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetFileExtensionParams, TextUnion>>

export type getFileExtensionSync = (params?: GetFileExtensionParams) => TextUnion
