import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TextUnion } from '../outputs'

export interface GetSuggestedFileNameParams {
  fileId?: number // Identifier of the file
  directory?: string // Directory in which the file is supposed to be saved
}

/**
 * Returns suggested name for saving a file in a given directory
 * @param {Object} params
 * @param {number} [params.fileId] - Identifier of the file
 * @param {string} [params.directory] - Directory in which the file is supposed to
 * be saved
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetSuggestedFileNameParams, TextUnion>>}
 */
export type getSuggestedFileName = (
  params?: GetSuggestedFileNameParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetSuggestedFileNameParams, TextUnion>>
