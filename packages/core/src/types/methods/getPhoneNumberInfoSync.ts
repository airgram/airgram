import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PhoneNumberInfoUnion } from '../outputs'

export interface GetPhoneNumberInfoSyncParams {
  languageCode?: string // A two-letter ISO 639-1 country code for country information localization
  phoneNumberPrefix?: string // The phone number prefix
}

/**
 * Returns information about a phone number by its prefix synchronously. getCountries
 * must be called at least once after changing localization to the specified language
 * if properly localized country information is expected. Can be called synchronously
 * @param {Object} params
 * @param {string} [params.languageCode] - A two-letter ISO 639-1 country code for
 * country information localization
 * @param {string} [params.phoneNumberPrefix] - The phone number prefix
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetPhoneNumberInfoSyncParams, PhoneNumberInfoUnion>>}
 */
export type getPhoneNumberInfoSync = (
  params?: GetPhoneNumberInfoSyncParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetPhoneNumberInfoSyncParams, PhoneNumberInfoUnion>>

export type getPhoneNumberInfoSyncSync = (params?: GetPhoneNumberInfoSyncParams) => PhoneNumberInfoUnion
