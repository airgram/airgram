import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface DeleteLanguagePackParams {
  languagePackId?: string // Identifier of the language pack to delete
}

/**
 * Deletes all information about a language pack in the current localization target.
 * The language pack which is currently in use (including base language pack) or is
 * being synchronized can't be deleted. Can be called before authorization
 * @param {Object} params
 * @param {string} [params.languagePackId] - Identifier of the language pack to delete
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DeleteLanguagePackParams, OkUnion>>}
 */
export type deleteLanguagePack<ExtensionT> = (
  params?: DeleteLanguagePackParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<DeleteLanguagePackParams, OkUnion> & ExtensionT>
