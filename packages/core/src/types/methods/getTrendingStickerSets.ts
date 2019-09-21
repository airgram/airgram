import { ApiRequestOptions, ApiResponse } from '../airgram'
import { StickerSetsUnion } from '../outputs'

/**
 * Returns a list of trending sticker sets
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, StickerSetsUnion>>}
 */
export type getTrendingStickerSets = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, StickerSetsUnion>>
