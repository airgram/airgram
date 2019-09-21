import { ApiRequestOptions, ApiResponse } from '../airgram'
import { EmailAddressAuthenticationCodeInfoUnion } from '../outputs'

/**
 * Re-sends the code to verify an email address to be added to a user's Telegram Passport
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, EmailAddressAuthenticationCodeInfoUnion>>}
 */
export type resendEmailAddressVerificationCode = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, EmailAddressAuthenticationCodeInfoUnion>>
