import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface RemoveRecentHashtagParams {
  hashtag?: string // Hashtag to delete
}

/**
 * Removes a hashtag from the list of recently used hashtags
 * @param {Object} params
 * @param {string} [params.hashtag] - Hashtag to delete
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RemoveRecentHashtagParams, OkUnion>>}
 */
export type removeRecentHashtag<ExtensionT> = (
  params?: RemoveRecentHashtagParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<RemoveRecentHashtagParams, OkUnion> & ExtensionT>
