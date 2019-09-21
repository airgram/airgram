import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OrderInfoUnion } from '../outputs'

/**
 * Returns saved order info, if any
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, OrderInfoUnion>>}
 */
export type getSavedOrderInfo = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, OrderInfoUnion>>
