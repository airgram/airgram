import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TextUnion } from '../outputs'

export interface GetFileMimeTypeParams {
  fileName?: string // The name of the file or path to the file
}

/**
 * Returns the MIME type of a file, guessed by its extension. Returns an empty string
 * on failure. This is an offline method. Can be called before authorization. Can be
 * called synchronously
 * @param {Object} params
 * @param {string} [params.fileName] - The name of the file or path to the file
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetFileMimeTypeParams, TextUnion>>}
 */
export type getFileMimeType<ExtensionT> = (
  params?: GetFileMimeTypeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetFileMimeTypeParams, TextUnion> & ExtensionT>
