import { StickerSetsUnion } from '../outputs'

/**
 * Searches for ordinary sticker sets by looking for specified query in their title
 * and name. Excludes installed sticker sets from the results
 * @param {Object} params
 * @param {string} [params.query] - Query to search for
 * @param {Object} state
 * @returns {StickerSetsUnion}
 */
export type SearchStickerSetsMethod = <ResponseT = StickerSetsUnion>(
  params: SearchStickerSetsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SearchStickerSetsParams {
  /** Query to search for */
  query?: string
}
