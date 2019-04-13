import { OkUnion } from '../outputs'

/**
 * The next part of a file was generated
 * @param {Object} params
 * @param {number | string} [params.generationId] - The identifier of the generation
 * process
 * @param {number} [params.expectedSize] - Expected size of the generated file, in
 * bytes; 0 if unknown
 * @param {number} [params.localPrefixSize] - The number of bytes already generated
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetFileGenerationProgressMethod = <ResponseT = OkUnion>(
  params: SetFileGenerationProgressParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetFileGenerationProgressParams {
  /** The identifier of the generation process */
  generationId?: number | string
  /** Expected size of the generated file, in bytes; 0 if unknown */
  expectedSize?: number
  /** The number of bytes already generated */
  localPrefixSize?: number
}
