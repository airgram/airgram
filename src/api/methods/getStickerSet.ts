import { StickerSetUnion } from '../outputs'

/**
 * Returns information about a sticker set by its identifier
 * @param {Object} params
 * @param {number | string} [params.setId] - Identifier of the sticker set
 * @param {Object} state
 * @returns {StickerSetUnion}
 */
export type GetStickerSetMethod = <ResponseT = StickerSetUnion>(
  params: GetStickerSetParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetStickerSetParams {
  /** Identifier of the sticker set */
  setId?: number | string
}
