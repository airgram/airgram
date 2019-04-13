import { OkUnion } from '../outputs'

/**
 * Removes a hashtag from the list of recently used hashtags
 * @param {Object} params
 * @param {string} [params.hashtag] - Hashtag to delete
 * @param {Object} state
 * @returns {OkUnion}
 */
export type RemoveRecentHashtagMethod = <ResponseT = OkUnion>(
  params: RemoveRecentHashtagParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface RemoveRecentHashtagParams {
  /** Hashtag to delete */
  hashtag?: string
}
