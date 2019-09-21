import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetFileGenerationProgressParams {
  generationId?: string // The identifier of the generation process
  expectedSize?: number // Expected size of the generated file, in bytes; 0 if unknown
  localPrefixSize?: number // The number of bytes already generated
}

/**
 * Informs TDLib on a file generation prograss
 * @param {Object} params
 * @param {string} [params.generationId] - The identifier of the generation process
 * @param {number} [params.expectedSize] - Expected size of the generated file, in
 * bytes; 0 if unknown
 * @param {number} [params.localPrefixSize] - The number of bytes already generated
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetFileGenerationProgressParams, OkUnion>>}
 */
export type setFileGenerationProgress = (
  params?: SetFileGenerationProgressParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetFileGenerationProgressParams, OkUnion>>
