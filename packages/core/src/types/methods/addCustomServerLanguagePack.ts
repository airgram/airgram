import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface AddCustomServerLanguagePackParams {
  languagePackId?: string // Identifier of a language pack to be added; may be different from a name that is used in an "https://t.me/setlanguage/" link
}

/**
 * Adds a custom server language pack to the list of installed language packs in current
 * localization target. Can be called before authorization
 * @param {Object} params
 * @param {string} [params.languagePackId] - Identifier of a language pack to be
 * added; may be different from a name that is used in an "https://t.me/setlanguage/"
 * link
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AddCustomServerLanguagePackParams, OkUnion>>}
 */
export type addCustomServerLanguagePack = (
  params?: AddCustomServerLanguagePackParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<AddCustomServerLanguagePackParams, OkUnion>>
