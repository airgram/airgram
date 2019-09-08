import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface AnswerCustomQueryParams {
  customQueryId?: string // Identifier of a custom query
  data?: string // JSON-serialized answer to the query
}

/**
 * Answers a custom query; for bots only
 * @param {Object} params
 * @param {string} [params.customQueryId] - Identifier of a custom query
 * @param {string} [params.data] - JSON-serialized answer to the query
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AnswerCustomQueryParams, OkUnion>>}
 */
export type answerCustomQuery<ExtensionT> = (
  params?: AnswerCustomQueryParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<AnswerCustomQueryParams, OkUnion> & ExtensionT>
