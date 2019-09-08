import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TextUnion } from '../outputs'

export interface GetFileExtensionParams {
  mimeType?: string // The MIME type of the file
}

/**
 * Returns the extension of a file, guessed by its MIME type. Returns an empty string
 * on failure. This is an offline method. Can be called before authorization. Can be
 * called synchronously
 * @param {Object} params
 * @param {string} [params.mimeType] - The MIME type of the file
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetFileExtensionParams, TextUnion>>}
 */
export type getFileExtension<ExtensionT> = (
  params?: GetFileExtensionParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetFileExtensionParams, TextUnion> & ExtensionT>
