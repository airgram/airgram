import { ApiRequestOptions, ApiResponse } from '../airgram'
import { LanguagePackStringInput } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetCustomLanguagePackStringParams {
  languagePackId?: string // Identifier of a previously added custom local language pack in the current localization target
  newString?: LanguagePackStringInput // New language pack string
}

/**
 * Adds, edits or deletes a string in a custom local language pack. Can be called before
 * authorization
 * @param {Object} params
 * @param {string} [params.languagePackId] - Identifier of a previously added custom
 * local language pack in the current localization target
 * @param {LanguagePackStringInput} [params.newString] - New language pack string
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetCustomLanguagePackStringParams, OkUnion>>}
 */
export type setCustomLanguagePackString<ExtensionT> = (
  params?: SetCustomLanguagePackStringParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetCustomLanguagePackStringParams, OkUnion> & ExtensionT>
