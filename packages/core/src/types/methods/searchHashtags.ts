import { ApiRequestOptions, ApiResponse } from '../airgram'
import { HashtagsUnion } from '../outputs'

export interface SearchHashtagsParams {
  prefix?: string // Hashtag prefix to search for
  limit?: number // The maximum number of hashtags to be returned
}

/**
 * Searches for recently used hashtags by their prefix
 * @param {Object} params
 * @param {string} [params.prefix] - Hashtag prefix to search for
 * @param {number} [params.limit] - The maximum number of hashtags to be returned
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchHashtagsParams, HashtagsUnion>>}
 */
export type searchHashtags = (
  params?: SearchHashtagsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchHashtagsParams, HashtagsUnion>>
