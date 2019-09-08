import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ErrorInput } from '../inputs'
import { OkUnion } from '../outputs'

export interface FinishFileGenerationParams {
  generationId?: string // The identifier of the generation process
  error?: ErrorInput // If set, means that file generation has failed and should be terminated
}

/**
 * Finishes the file generation
 * @param {Object} params
 * @param {string} [params.generationId] - The identifier of the generation process
 * @param {ErrorInput} [params.error] - If set, means that file generation has failed
 * and should be terminated
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<FinishFileGenerationParams, OkUnion>>}
 */
export type finishFileGeneration<ExtensionT> = (
  params?: FinishFileGenerationParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<FinishFileGenerationParams, OkUnion> & ExtensionT>
