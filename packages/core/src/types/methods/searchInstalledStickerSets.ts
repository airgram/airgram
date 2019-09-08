import { ApiRequestOptions, ApiResponse } from '../airgram'
import { StickerSetsUnion } from '../outputs'

export interface SearchInstalledStickerSetsParams {
  isMasks?: boolean // Pass true to return mask sticker sets; pass false to return ordinary sticker sets
  query?: string // Query to search for
  limit?: number // Maximum number of sticker sets to return
}

/**
 * Searches for installed sticker sets by looking for specified query in their title
 * and name
 * @param {Object} params
 * @param {boolean} [params.isMasks] - Pass true to return mask sticker sets; pass
 * false to return ordinary sticker sets
 * @param {string} [params.query] - Query to search for
 * @param {number} [params.limit] - Maximum number of sticker sets to return
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchInstalledStickerSetsParams, StickerSetsUnion>>}
 */
export type searchInstalledStickerSets<ExtensionT> = (
  params?: SearchInstalledStickerSetsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchInstalledStickerSetsParams, StickerSetsUnion> & ExtensionT>
