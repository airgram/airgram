import { ApiRequestOptions, ApiResponse } from '../airgram'
import { StickerSetsUnion } from '../outputs'

/**
 * Returns a list of trending sticker sets
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, StickerSetsUnion>>}
 */
export type getTrendingStickerSets<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, StickerSetsUnion> & ExtensionT>
