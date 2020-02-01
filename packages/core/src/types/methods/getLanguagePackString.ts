import { ApiRequestOptions, ApiResponse } from '../airgram'
import { LanguagePackStringValueUnion } from '../outputs'

export interface GetLanguagePackStringParams {
  languagePackDatabasePath?: string // Path to the language pack database in which strings are stored
  localizationTarget?: string // Localization target to which the language pack belongs
  languagePackId?: string // Language pack identifier
  key?: string // Language pack key of the string to be returned
}

/**
 * Returns a string stored in the local database from the specified localization target
 * and language pack by its key. Returns a 404 error if the string is not found. This
 * is an offline method. Can be called before authorization. Can be called synchronously
 * @param {Object} params
 * @param {string} [params.languagePackDatabasePath] - Path to the language pack
 * database in which strings are stored
 * @param {string} [params.localizationTarget] - Localization target to which the
 * language pack belongs
 * @param {string} [params.languagePackId] - Language pack identifier
 * @param {string} [params.key] - Language pack key of the string to be returned
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetLanguagePackStringParams, LanguagePackStringValueUnion>>}
 */
export type getLanguagePackString = (
  params?: GetLanguagePackStringParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetLanguagePackStringParams, LanguagePackStringValueUnion>>

export type getLanguagePackStringSync = (params?: GetLanguagePackStringParams) => LanguagePackStringValueUnion
