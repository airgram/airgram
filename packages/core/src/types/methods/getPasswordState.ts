import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PasswordStateUnion } from '../outputs'



/**
 * Returns the current state of 2-step verification
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, PasswordStateUnion>>}
 */
export type getPasswordState = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, PasswordStateUnion>>
