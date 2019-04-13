import { OkUnion } from '../outputs'

/**
 * Deletes all information about a language pack in the current localization target.
 * The language pack that is currently in use can't be deleted
 * @param {Object} params
 * @param {string} [params.languagePackId] - Identifier of the language pack to delete
 * @param {Object} state
 * @returns {OkUnion}
 */
export type DeleteLanguagePackMethod = <ResponseT = OkUnion>(
  params: DeleteLanguagePackParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface DeleteLanguagePackParams {
  /** Identifier of the language pack to delete */
  languagePackId?: string
}
