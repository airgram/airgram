import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface CheckAuthenticationPasswordParams {
  password?: string // The password to check
}

/**
 * Checks the authentication password for correctness. Works only when the current authorization
 * state is authorizationStateWaitPassword
 * @param {Object} params
 * @param {string} [params.password] - The password to check
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CheckAuthenticationPasswordParams, OkUnion>>}
 */
export type checkAuthenticationPassword = (
  params?: CheckAuthenticationPasswordParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CheckAuthenticationPasswordParams, OkUnion>>
