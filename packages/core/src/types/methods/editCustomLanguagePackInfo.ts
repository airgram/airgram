import { ApiRequestOptions, ApiResponse } from '../airgram'
import { LanguagePackInfoInput } from '../inputs'
import { OkUnion } from '../outputs'

export interface EditCustomLanguagePackInfoParams {
  info?: LanguagePackInfoInput // New information about the custom local language pack
}

/**
 * Edits information about a custom local language pack in the current localization
 * target. Can be called before authorization
 * @param {Object} params
 * @param {LanguagePackInfoInput} [params.info] - New information about the custom
 * local language pack
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EditCustomLanguagePackInfoParams, OkUnion>>}
 */
export type editCustomLanguagePackInfo = (
  params?: EditCustomLanguagePackInfoParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<EditCustomLanguagePackInfoParams, OkUnion>>
