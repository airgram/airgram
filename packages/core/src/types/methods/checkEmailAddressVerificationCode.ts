import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface CheckEmailAddressVerificationCodeParams {
  code?: string // Verification code
}

/**
 * Checks the email address verification code for Telegram Passport
 * @param {Object} params
 * @param {string} [params.code] - Verification code
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CheckEmailAddressVerificationCodeParams, OkUnion>>}
 */
export type checkEmailAddressVerificationCode<ExtensionT> = (
  params?: CheckEmailAddressVerificationCodeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CheckEmailAddressVerificationCodeParams, OkUnion> & ExtensionT>
