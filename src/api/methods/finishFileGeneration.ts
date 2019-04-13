import { ErrorInput } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Finishes the file generation
 * @param {Object} params
 * @param {number | string} [params.generationId] - The identifier of the generation
 * process
 * @param {ErrorInput} [params.error] - If set, means that file generation has failed
 * and should be terminated
 * @param {Object} state
 * @returns {OkUnion}
 */
export type FinishFileGenerationMethod = <ResponseT = OkUnion>(
  params: FinishFileGenerationParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface FinishFileGenerationParams {
  /** The identifier of the generation process */
  generationId?: number | string
  /** If set, means that file generation has failed and should be terminated */
  error?: ErrorInput
}
