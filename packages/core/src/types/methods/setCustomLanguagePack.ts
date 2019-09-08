import { ApiRequestOptions, ApiResponse } from '../airgram'
import { LanguagePackInfoInput, LanguagePackStringInput } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetCustomLanguagePackParams {
  info?: LanguagePackInfoInput // Information about the language pack. Language pack ID must start with 'X', consist only of English letters, digits and hyphens, and must not exceed 64 characters. Can be called before authorization
  strings?: LanguagePackStringInput[] // Strings of the new language pack
}

/**
 * Adds or changes a custom local language pack to the current localization target
 * @param {Object} params
 * @param {LanguagePackInfoInput} [params.info] - Information about the language
 * pack. Language pack ID must start with 'X', consist only of English letters, digits
 * and hyphens, and must not exceed 64 characters. Can be called before authorization
 * @param {LanguagePackStringInput[]} [params.strings] - Strings of the new language
 * pack
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetCustomLanguagePackParams, OkUnion>>}
 */
export type setCustomLanguagePack<ExtensionT> = (
  params?: SetCustomLanguagePackParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetCustomLanguagePackParams, OkUnion> & ExtensionT>
