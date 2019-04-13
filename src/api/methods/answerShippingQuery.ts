import { ShippingOptionInput } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Sets the result of a shipping query; for bots only
 * @param {Object} params
 * @param {number | string} [params.shippingQueryId] - Identifier of the shipping
 * query
 * @param {ShippingOptionInput[]} [params.shippingOptions] - Available shipping options
 * @param {string} [params.errorMessage] - An error message, empty on success
 * @param {Object} state
 * @returns {OkUnion}
 */
export type AnswerShippingQueryMethod = <ResponseT = OkUnion>(
  params: AnswerShippingQueryParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface AnswerShippingQueryParams {
  /** Identifier of the shipping query */
  shippingQueryId?: number | string
  /** Available shipping options */
  shippingOptions?: ShippingOptionInput[]
  /** An error message, empty on success */
  errorMessage?: string
}
