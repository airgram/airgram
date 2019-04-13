import { LanguagePackInfoInput, LanguagePackStringInput } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Adds or changes a custom language pack to the current localization target
 * @param {Object} params
 * @param {LanguagePackInfoInput} [params.info] - Information about the language
 * pack. Language pack ID must start with 'X', consist only of English letters, digits
 * and hyphens, and must not exceed 64 characters
 * @param {LanguagePackStringInput[]} [params.strings] - Strings of the new language
 * pack
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetCustomLanguagePackMethod = <ResponseT = OkUnion>(
  params: SetCustomLanguagePackParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetCustomLanguagePackParams {
  /**
   * Information about the language pack. Language pack ID must start with 'X', consist
   * only of English letters, digits and hyphens, and must not exceed 64 characters
   */
  info?: LanguagePackInfoInput
  /** Strings of the new language pack */
  strings?: LanguagePackStringInput[]
}
