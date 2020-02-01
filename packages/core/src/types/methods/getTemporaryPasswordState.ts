import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TemporaryPasswordStateUnion } from '../outputs'



/**
 * Returns information about the current temporary password
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, TemporaryPasswordStateUnion>>}
 */
export type getTemporaryPasswordState = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, TemporaryPasswordStateUnion>>
