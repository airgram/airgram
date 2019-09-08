import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PhoneNumberAuthenticationSettingsInput } from '../inputs'
import { AuthenticationCodeInfoUnion } from '../outputs'

export interface ChangePhoneNumberParams {
  phoneNumber?: string // The new phone number of the user in international format
  settings?: PhoneNumberAuthenticationSettingsInput // Settings for the authentication of the user's phone number
}

/**
 * Changes the phone number of the user and sends an authentication code to the user's
 * new phone number. On success, returns information about the sent code
 * @param {Object} params
 * @param {string} [params.phoneNumber] - The new phone number of the user in international
 * format
 * @param {PhoneNumberAuthenticationSettingsInput} [params.settings] - Settings for
 * the authentication of the user's phone number
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ChangePhoneNumberParams, AuthenticationCodeInfoUnion>>}
 */
export type changePhoneNumber<ExtensionT> = (
  params?: ChangePhoneNumberParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ChangePhoneNumberParams, AuthenticationCodeInfoUnion> & ExtensionT>
