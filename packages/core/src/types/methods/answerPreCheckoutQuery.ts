import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface AnswerPreCheckoutQueryParams {
  preCheckoutQueryId?: string // Identifier of the pre-checkout query
  errorMessage?: string // An error message, empty on success
}

/**
 * Sets the result of a pre-checkout query; for bots only
 * @param {Object} params
 * @param {string} [params.preCheckoutQueryId] - Identifier of the pre-checkout query
 * @param {string} [params.errorMessage] - An error message, empty on success
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AnswerPreCheckoutQueryParams, OkUnion>>}
 */
export type answerPreCheckoutQuery<ExtensionT> = (
  params?: AnswerPreCheckoutQueryParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<AnswerPreCheckoutQueryParams, OkUnion> & ExtensionT>
