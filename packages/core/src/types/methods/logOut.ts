import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'



/**
 * Closes the TDLib instance after a proper logout. Requires an available network connection.
 * All local data will be destroyed. After the logout completes, updateAuthorizationState
 * with authorizationStateClosed will be sent
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, OkUnion>>}
 */
export type logOut = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, OkUnion>>
