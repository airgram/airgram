import { ApiRequestOptions, ApiResponse } from '../airgram'
import { HttpUrlUnion } from '../outputs'

export interface GetEmojiSuggestionsUrlParams {
  languageCode?: string // Language code for which the emoji replacements will be suggested
}

/**
 * Returns an HTTP URL which can be used to automatically log in to the translation
 * platform and suggest new emoji replacements. The URL will be valid for 30 seconds
 * after generation
 * @param {Object} params
 * @param {string} [params.languageCode] - Language code for which the emoji replacements
 * will be suggested
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetEmojiSuggestionsUrlParams, HttpUrlUnion>>}
 */
export type getEmojiSuggestionsUrl<ExtensionT> = (
  params?: GetEmojiSuggestionsUrlParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetEmojiSuggestionsUrlParams, HttpUrlUnion> & ExtensionT>
