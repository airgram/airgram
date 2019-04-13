import { TextUnion } from '../outputs'

/**
 * Returns an IETF language tag of the language preferred in the country, which should
 * be used to fill native fields in Telegram Passport personal details. Returns a 404
 * error if unknown
 * @param {Object} params
 * @param {string} [params.countryCode] - A two-letter ISO 3166-1 alpha-2 country
 * code
 * @param {Object} state
 * @returns {TextUnion}
 */
export type GetPreferredCountryLanguageMethod = <ResponseT = TextUnion>(
  params: GetPreferredCountryLanguageParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetPreferredCountryLanguageParams {
  /** A two-letter ISO 3166-1 alpha-2 country code */
  countryCode?: string
}
