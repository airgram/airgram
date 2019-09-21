import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface CheckAuthenticationCodeParams {
  code?: string // The verification code received via SMS, Telegram message, phone call, or flash call
}

/**
 * Checks the authentication code. Works only when the current authorization state is
 * authorizationStateWaitCode
 * @param {Object} params
 * @param {string} [params.code] - The verification code received via SMS, Telegram
 * message, phone call, or flash call
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CheckAuthenticationCodeParams, OkUnion>>}
 */
export type checkAuthenticationCode = (
  params?: CheckAuthenticationCodeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CheckAuthenticationCodeParams, OkUnion>>
