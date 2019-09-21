import { ApiRequestOptions, ApiResponse } from '../airgram'
import { EmojisUnion } from '../outputs'

export interface SearchEmojisParams {
  text?: string // Text to search for
  exactMatch?: boolean // True, if only emojis, which exactly match text needs to be returned
}

/**
 * Searches for emojis by keywords. Supported only if the file database is enabled
 * @param {Object} params
 * @param {string} [params.text] - Text to search for
 * @param {boolean} [params.exactMatch] - True, if only emojis, which exactly match
 * text needs to be returned
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchEmojisParams, EmojisUnion>>}
 */
export type searchEmojis = (
  params?: SearchEmojisParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchEmojisParams, EmojisUnion>>
