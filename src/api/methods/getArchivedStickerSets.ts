import { StickerSetsUnion } from '../outputs'

/**
 * Returns a list of archived sticker sets
 * @param {Object} params
 * @param {boolean} [params.isMasks] - Pass true to return mask stickers sets; pass
 * false to return ordinary sticker sets
 * @param {number | string} [params.offsetStickerSetId] - Identifier of the sticker
 * set from which to return the result
 * @param {number} [params.limit] - Maximum number of sticker sets to return
 * @param {Object} state
 * @returns {StickerSetsUnion}
 */
export type GetArchivedStickerSetsMethod = <ResponseT = StickerSetsUnion>(
  params: GetArchivedStickerSetsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetArchivedStickerSetsParams {
  /** Pass true to return mask stickers sets; pass false to return ordinary sticker sets */
  isMasks?: boolean
  /** Identifier of the sticker set from which to return the result */
  offsetStickerSetId?: number | string
  /** Maximum number of sticker sets to return */
  limit?: number
}
