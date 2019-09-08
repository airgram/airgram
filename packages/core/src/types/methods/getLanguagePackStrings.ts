import { ApiRequestOptions, ApiResponse } from '../airgram'
import { LanguagePackStringsUnion } from '../outputs'

export interface GetLanguagePackStringsParams {
  languagePackId?: string // Language pack identifier of the strings to be returned
  keys?: string[] // Language pack keys of the strings to be returned; leave empty to request all available strings
}

/**
 * Returns strings from a language pack in the current localization target by their
 * keys. Can be called before authorization
 * @param {Object} params
 * @param {string} [params.languagePackId] - Language pack identifier of the strings
 * to be returned
 * @param {string[]} [params.keys] - Language pack keys of the strings to be returned;
 * leave empty to request all available strings
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetLanguagePackStringsParams, LanguagePackStringsUnion>>}
 */
export type getLanguagePackStrings<ExtensionT> = (
  params?: GetLanguagePackStringsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetLanguagePackStringsParams, LanguagePackStringsUnion> & ExtensionT>
