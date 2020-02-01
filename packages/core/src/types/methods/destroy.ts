import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'



/**
 * Closes the TDLib instance, destroying all local data without a proper logout. The
 * current user session will remain in the list of all active sessions. All local data
 * will be destroyed. After the destruction completes updateAuthorizationState with
 * authorizationStateClosed will be sent
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, OkUnion>>}
 */
export type destroy = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, OkUnion>>
