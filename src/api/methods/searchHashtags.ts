import { HashtagsUnion } from '../outputs'

/**
 * Searches for recently used hashtags by their prefix
 * @param {Object} params
 * @param {string} [params.prefix] - Hashtag prefix to search for
 * @param {number} [params.limit] - Maximum number of hashtags to be returned
 * @param {Object} state
 * @returns {HashtagsUnion}
 */
export type SearchHashtagsMethod = <ResponseT = HashtagsUnion>(
  params: SearchHashtagsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SearchHashtagsParams {
  /** Hashtag prefix to search for */
  prefix?: string
  /** Maximum number of hashtags to be returned */
  limit?: number
}
