import { LanguagePackStringsUnion } from '../outputs'

/**
 * Returns strings from a language pack in the current localization target by their
 * keys
 * @param {Object} params
 * @param {string} [params.languagePackId] - Language pack identifier of the strings
 * to be returned
 * @param {string[]} [params.keys] - Language pack keys of the strings to be returned;
 * leave empty to request all available strings
 * @param {Object} state
 * @returns {LanguagePackStringsUnion}
 */
export type GetLanguagePackStringsMethod = <ResponseT = LanguagePackStringsUnion>(
  params: GetLanguagePackStringsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetLanguagePackStringsParams {
  /** Language pack identifier of the strings to be returned */
  languagePackId?: string
  /**
   * Language pack keys of the strings to be returned; leave empty to request all available
   * strings
   */
  keys?: string[]
}
