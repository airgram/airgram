import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface CheckAuthenticationCodeParams {
  code?: string // Authentication code to check
}

/**
 * Checks the authentication code. Works only when the current authorization state is
 * authorizationStateWaitCode
 * @param {Object} params
 * @param {string} [params.code] - Authentication code to check
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CheckAuthenticationCodeParams, OkUnion>>}
 */
export type checkAuthenticationCode = (
  params?: CheckAuthenticationCodeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CheckAuthenticationCodeParams, OkUnion>>
