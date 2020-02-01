import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PhoneNumberAuthenticationSettingsInput } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetAuthenticationPhoneNumberParams {
  phoneNumber?: string // The phone number of the user, in international format
  settings?: PhoneNumberAuthenticationSettingsInput // Settings for the authentication of the user's phone number
}

/**
 * Sets the phone number of the user and sends an authentication code to the user. Works
 * only when the current authorization state is authorizationStateWaitPhoneNumber, or
 * if there is no pending authentication query and the current authorization state is
 * authorizationStateWaitCode, authorizationStateWaitRegistration, or authorizationStateWaitPassword
 * @param {Object} params
 * @param {string} [params.phoneNumber] - The phone number of the user, in international
 * format
 * @param {PhoneNumberAuthenticationSettingsInput} [params.settings] - Settings for
 * the authentication of the user's phone number
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetAuthenticationPhoneNumberParams, OkUnion>>}
 */
export type setAuthenticationPhoneNumber = (
  params?: SetAuthenticationPhoneNumberParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetAuthenticationPhoneNumberParams, OkUnion>>
