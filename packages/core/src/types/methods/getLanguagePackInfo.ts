import { ApiRequestOptions, ApiResponse } from '../airgram'
import { LanguagePackInfoUnion } from '../outputs'

export interface GetLanguagePackInfoParams {
  languagePackId?: string // Language pack identifier
}

/**
 * Returns information about a language pack. Returned language pack identifier may
 * be different from a provided one. Can be called before authorization
 * @param {Object} params
 * @param {string} [params.languagePackId] - Language pack identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetLanguagePackInfoParams, LanguagePackInfoUnion>>}
 */
export type getLanguagePackInfo = (
  params?: GetLanguagePackInfoParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetLanguagePackInfoParams, LanguagePackInfoUnion>>
