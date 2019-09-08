import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TextUnion } from '../outputs'

export interface CleanFileNameParams {
  fileName?: string // File name or path to the file
}

/**
 * Removes potentially dangerous characters from the name of a file. The encoding of
 * the file name is supposed to be UTF-8. Returns an empty string on failure. This is
 * an offline method. Can be called before authorization. Can be called synchronously
 * @param {Object} params
 * @param {string} [params.fileName] - File name or path to the file
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CleanFileNameParams, TextUnion>>}
 */
export type cleanFileName<ExtensionT> = (
  params?: CleanFileNameParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CleanFileNameParams, TextUnion> & ExtensionT>
