import { ApiRequestOptions, ApiResponse } from '../airgram'
import { EmailAddressAuthenticationCodeInfoUnion } from '../outputs'

export interface SendEmailAddressVerificationCodeParams {
  emailAddress?: string // Email address
}

/**
 * Sends a code to verify an email address to be added to a user's Telegram Passport
 * @param {Object} params
 * @param {string} [params.emailAddress] - Email address
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendEmailAddressVerificationCodeParams, EmailAddressAuthenticationCodeInfoUnion>>}
 */
export type sendEmailAddressVerificationCode = (
  params?: SendEmailAddressVerificationCodeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendEmailAddressVerificationCodeParams, EmailAddressAuthenticationCodeInfoUnion>>
