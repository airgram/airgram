import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PhoneNumberAuthenticationSettingsInput } from '../inputs'
import { AuthenticationCodeInfoUnion } from '../outputs'

export interface SendPhoneNumberConfirmationCodeParams {
  hash?: string // Value of the "hash" parameter from the link
  phoneNumber?: string // Value of the "phone" parameter from the link
  settings?: PhoneNumberAuthenticationSettingsInput // Settings for the authentication of the user's phone number
}

/**
 * Sends phone number confirmation code. Should be called when user presses "https://t.me/confirmphone?phone=*******&hash=**********"
 * or "tg://confirmphone?phone=*******&hash=**********" link
 * @param {Object} params
 * @param {string} [params.hash] - Value of the "hash" parameter from the link
 * @param {string} [params.phoneNumber] - Value of the "phone" parameter from the
 * link
 * @param {PhoneNumberAuthenticationSettingsInput} [params.settings] - Settings for
 * the authentication of the user's phone number
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendPhoneNumberConfirmationCodeParams, AuthenticationCodeInfoUnion>>}
 */
export type sendPhoneNumberConfirmationCode<ExtensionT> = (
  params?: SendPhoneNumberConfirmationCodeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendPhoneNumberConfirmationCodeParams, AuthenticationCodeInfoUnion> & ExtensionT>
