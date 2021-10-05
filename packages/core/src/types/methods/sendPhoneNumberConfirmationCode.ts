import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PhoneNumberAuthenticationSettingsInput } from '../inputs'
import { AuthenticationCodeInfoUnion } from '../outputs'

export interface SendPhoneNumberConfirmationCodeParams {
  hash?: string // Hash value from the link
  phoneNumber?: string // Phone number value from the link
  settings?: PhoneNumberAuthenticationSettingsInput // Settings for the authentication of the user's phone number; pass null to use default settings
}

/**
 * Sends phone number confirmation code to handle links of the type internalLinkTypePhoneNumberConfirmation
 * @param {Object} params
 * @param {string} [params.hash] - Hash value from the link
 * @param {string} [params.phoneNumber] - Phone number value from the link
 * @param {PhoneNumberAuthenticationSettingsInput} [params.settings] - Settings for
 * the authentication of the user's phone number; pass null to use default settings
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendPhoneNumberConfirmationCodeParams, AuthenticationCodeInfoUnion>>}
 */
export type sendPhoneNumberConfirmationCode = (
  params?: SendPhoneNumberConfirmationCodeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendPhoneNumberConfirmationCodeParams, AuthenticationCodeInfoUnion>>
