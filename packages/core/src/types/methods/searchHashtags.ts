import { ApiRequestOptions, ApiResponse } from '../airgram'
import { HashtagsUnion } from '../outputs'

export interface SearchHashtagsParams {
  prefix?: string // Hashtag prefix to search for
  limit?: number // Maximum number of hashtags to be returned
}

/**
 * Searches for recently used hashtags by their prefix
 * @param {Object} params
 * @param {string} [params.prefix] - Hashtag prefix to search for
 * @param {number} [params.limit] - Maximum number of hashtags to be returned
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchHashtagsParams, HashtagsUnion>>}
 */
export type searchHashtags<ExtensionT> = (
  params?: SearchHashtagsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchHashtagsParams, HashtagsUnion> & ExtensionT>
