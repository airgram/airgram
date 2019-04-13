import { LanguagePackStringValueUnion } from '../outputs'

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
 * @param {Object} state
 * @returns {LanguagePackStringValueUnion}
 */
export type GetLanguagePackStringMethod = <ResponseT = LanguagePackStringValueUnion>(
  params: GetLanguagePackStringParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetLanguagePackStringParams {
  /** Path to the language pack database in which strings are stored */
  languagePackDatabasePath?: string
  /** Localization target to which the language pack belongs */
  localizationTarget?: string
  /** Language pack identifier */
  languagePackId?: string
  /** Language pack key of the string to be returned */
  key?: string
}
