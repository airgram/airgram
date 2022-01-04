import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface CheckPhoneNumberVerificationCodeParams {
  code?: string // Verification code to check
}

/**
 * Checks the phone number verification code for Telegram Passport
 * @param {Object} params
 * @param {string} [params.code] - Verification code to check
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CheckPhoneNumberVerificationCodeParams, OkUnion>>}
 */
export type checkPhoneNumberVerificationCode = (
  params?: CheckPhoneNumberVerificationCodeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CheckPhoneNumberVerificationCodeParams, OkUnion>>
