import { OkUnion } from '../outputs'

/**
 * Answers a custom query; for bots only
 * @param {Object} params
 * @param {number | string} [params.customQueryId] - Identifier of a custom query
 * @param {string} [params.data] - JSON-serialized answer to the query
 * @param {Object} state
 * @returns {OkUnion}
 */
export type AnswerCustomQueryMethod = <ResponseT = OkUnion>(
  params: AnswerCustomQueryParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface AnswerCustomQueryParams {
  /** Identifier of a custom query */
  customQueryId?: number | string
  /** JSON-serialized answer to the query */
  data?: string
}
