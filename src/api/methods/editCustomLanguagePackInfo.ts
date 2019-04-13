import { LanguagePackInfoInput } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Edits information about a custom language pack in the current localization target
 * @param {Object} params
 * @param {LanguagePackInfoInput} [params.info] - New information about the custom
 * language pack
 * @param {Object} state
 * @returns {OkUnion}
 */
export type EditCustomLanguagePackInfoMethod = <ResponseT = OkUnion>(
  params: EditCustomLanguagePackInfoParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface EditCustomLanguagePackInfoParams {
  /** New information about the custom language pack */
  info?: LanguagePackInfoInput
}
