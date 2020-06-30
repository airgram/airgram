import { ApiRequestOptions, ApiResponse } from '../airgram'
import { StickerSetsUnion } from '../outputs'

export interface GetTrendingStickerSetsParams {
  offset?: number // The offset from which to return the sticker sets; must be non-negative
  limit?: number // The maximum number of sticker sets to be returned; must be non-negative. Fewer sticker sets may be returned than specified by the limit, even if the end of the list has not been reached
}

/**
 * Returns a list of trending sticker sets. For the optimal performance the number of
 * returned sticker sets is chosen by the library
 * @param {Object} params
 * @param {number} [params.offset] - The offset from which to return the sticker
 * sets; must be non-negative
 * @param {number} [params.limit] - The maximum number of sticker sets to be returned;
 * must be non-negative. Fewer sticker sets may be returned than specified by the limit,
 * even if the end of the list has not been reached
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetTrendingStickerSetsParams, StickerSetsUnion>>}
 */
export type getTrendingStickerSets = (
  params?: GetTrendingStickerSetsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetTrendingStickerSetsParams, StickerSetsUnion>>
