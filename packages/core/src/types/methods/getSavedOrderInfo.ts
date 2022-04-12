import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OrderInfoUnion } from '../outputs'



/**
 * Returns saved order information. Returns a 404 error if there is no saved order information
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, OrderInfoUnion>>}
 */
export type getSavedOrderInfo = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, OrderInfoUnion>>
