import { StickerSetUnion } from '../outputs'

/**
 * Searches for a sticker set by its name
 * @param {Object} params
 * @param {string} [params.name] - Name of the sticker set
 * @param {Object} state
 * @returns {StickerSetUnion}
 */
export type SearchStickerSetMethod = <ResponseT = StickerSetUnion>(
  params: SearchStickerSetParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SearchStickerSetParams {
  /** Name of the sticker set */
  name?: string
}
