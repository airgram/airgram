import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PhoneNumberAuthenticationSettingsInput } from '../inputs'
import { AuthenticationCodeInfoUnion } from '../outputs'

export interface SendPhoneNumberVerificationCodeParams {
  phoneNumber?: string // The phone number of the user, in international format
  settings?: PhoneNumberAuthenticationSettingsInput // Settings for the authentication of the user's phone number
}

/**
 * Sends a code to verify a phone number to be added to a user's Telegram Passport
 * @param {Object} params
 * @param {string} [params.phoneNumber] - The phone number of the user, in international
 * format
 * @param {PhoneNumberAuthenticationSettingsInput} [params.settings] - Settings for
 * the authentication of the user's phone number
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendPhoneNumberVerificationCodeParams, AuthenticationCodeInfoUnion>>}
 */
export type sendPhoneNumberVerificationCode<ExtensionT> = (
  params?: SendPhoneNumberVerificationCodeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendPhoneNumberVerificationCodeParams, AuthenticationCodeInfoUnion> & ExtensionT>
