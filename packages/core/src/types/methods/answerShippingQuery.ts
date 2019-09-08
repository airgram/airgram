import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ShippingOptionInput } from '../inputs'
import { OkUnion } from '../outputs'

export interface AnswerShippingQueryParams {
  shippingQueryId?: string // Identifier of the shipping query
  shippingOptions?: ShippingOptionInput[] // Available shipping options
  errorMessage?: string // An error message, empty on success
}

/**
 * Sets the result of a shipping query; for bots only
 * @param {Object} params
 * @param {string} [params.shippingQueryId] - Identifier of the shipping query
 * @param {ShippingOptionInput[]} [params.shippingOptions] - Available shipping options
 * @param {string} [params.errorMessage] - An error message, empty on success
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AnswerShippingQueryParams, OkUnion>>}
 */
export type answerShippingQuery<ExtensionT> = (
  params?: AnswerShippingQueryParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<AnswerShippingQueryParams, OkUnion> & ExtensionT>
