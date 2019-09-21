import { ApiRequestOptions, ApiResponse } from '../airgram'
import { StickerSetsUnion } from '../outputs'

export interface SearchStickerSetsParams {
  query?: string // Query to search for
}

/**
 * Searches for ordinary sticker sets by looking for specified query in their title
 * and name. Excludes installed sticker sets from the results
 * @param {Object} params
 * @param {string} [params.query] - Query to search for
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchStickerSetsParams, StickerSetsUnion>>}
 */
export type searchStickerSets = (
  params?: SearchStickerSetsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchStickerSetsParams, StickerSetsUnion>>
