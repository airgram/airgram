import { OkUnion } from '../outputs'

/**
 * Sets the result of a pre-checkout query; for bots only
 * @param {Object} params
 * @param {number | string} [params.preCheckoutQueryId] - Identifier of the pre-checkout
 * query
 * @param {string} [params.errorMessage] - An error message, empty on success
 * @param {Object} state
 * @returns {OkUnion}
 */
export type AnswerPreCheckoutQueryMethod = <ResponseT = OkUnion>(
  params: AnswerPreCheckoutQueryParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface AnswerPreCheckoutQueryParams {
  /** Identifier of the pre-checkout query */
  preCheckoutQueryId?: number | string
  /** An error message, empty on success */
  errorMessage?: string
}
