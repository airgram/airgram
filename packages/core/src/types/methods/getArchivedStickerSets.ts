import { ApiRequestOptions, ApiResponse } from '../airgram'
import { StickerSetsUnion } from '../outputs'

export interface GetArchivedStickerSetsParams {
  isMasks?: boolean // Pass true to return mask stickers sets; pass false to return ordinary sticker sets
  offsetStickerSetId?: string // Identifier of the sticker set from which to return the result
  limit?: number // The maximum number of sticker sets to return; up to 100
}

/**
 * Returns a list of archived sticker sets
 * @param {Object} params
 * @param {boolean} [params.isMasks] - Pass true to return mask stickers sets; pass
 * false to return ordinary sticker sets
 * @param {string} [params.offsetStickerSetId] - Identifier of the sticker set from
 * which to return the result
 * @param {number} [params.limit] - The maximum number of sticker sets to return;
 * up to 100
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetArchivedStickerSetsParams, StickerSetsUnion>>}
 */
export type getArchivedStickerSets = (
  params?: GetArchivedStickerSetsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetArchivedStickerSetsParams, StickerSetsUnion>>
