import { ApiRequestOptions, ApiResponse } from '../airgram'
import { AuthenticationCodeInfoUnion } from '../outputs'

/**
 * Re-sends the code to verify a phone number to be added to a user's Telegram Passport
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, AuthenticationCodeInfoUnion>>}
 */
export type resendPhoneNumberVerificationCode = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, AuthenticationCodeInfoUnion>>
