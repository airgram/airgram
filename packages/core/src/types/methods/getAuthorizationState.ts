import { ApiRequestOptions, ApiResponse } from '../airgram'
import { AuthorizationStateUnion } from '../outputs'



/**
 * Returns the current authorization state; this is an offline request. For informational
 * purposes only. Use updateAuthorizationState instead to maintain the current authorization
 * state
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, AuthorizationStateUnion>>}
 */
export type getAuthorizationState = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, AuthorizationStateUnion>>
