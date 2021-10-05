import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ErrorInput } from '../inputs'
import { OkUnion } from '../outputs'

export interface FinishFileGenerationParams {
  generationId?: string // The identifier of the generation process
  error?: ErrorInput // If passed, the file generation has failed and must be terminated; pass null if the file generation succeeded
}

/**
 * Finishes the file generation
 * @param {Object} params
 * @param {string} [params.generationId] - The identifier of the generation process
 * @param {ErrorInput} [params.error] - If passed, the file generation has failed
 * and must be terminated; pass null if the file generation succeeded
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<FinishFileGenerationParams, OkUnion>>}
 */
export type finishFileGeneration = (
  params?: FinishFileGenerationParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<FinishFileGenerationParams, OkUnion>>
