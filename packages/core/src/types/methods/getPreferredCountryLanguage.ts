import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TextUnion } from '../outputs'

export interface GetPreferredCountryLanguageParams {
  countryCode?: string // A two-letter ISO 3166-1 alpha-2 country code
}

/**
 * Returns an IETF language tag of the language preferred in the country, which should
 * be used to fill native fields in Telegram Passport personal details. Returns a 404
 * error if unknown
 * @param {Object} params
 * @param {string} [params.countryCode] - A two-letter ISO 3166-1 alpha-2 country
 * code
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetPreferredCountryLanguageParams, TextUnion>>}
 */
export type getPreferredCountryLanguage<ExtensionT> = (
  params?: GetPreferredCountryLanguageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetPreferredCountryLanguageParams, TextUnion> & ExtensionT>
