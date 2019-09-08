import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SynchronizeLanguagePackParams {
  languagePackId?: string // Language pack identifier
}

/**
 * Fetches the latest versions of all strings from a language pack in the current localization
 * target from the server. This method doesn't need to be called explicitly for the
 * current used/base language packs. Can be called before authorization
 * @param {Object} params
 * @param {string} [params.languagePackId] - Language pack identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SynchronizeLanguagePackParams, OkUnion>>}
 */
export type synchronizeLanguagePack<ExtensionT> = (
  params?: SynchronizeLanguagePackParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SynchronizeLanguagePackParams, OkUnion> & ExtensionT>
