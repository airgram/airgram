import { StickerSetsUnion } from '../outputs'

/**
 * Returns a list of trending sticker sets
 * @param {Object} state
 * @returns {StickerSetsUnion}
 */
export type GetTrendingStickerSetsMethod = <ResponseT = StickerSetsUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
