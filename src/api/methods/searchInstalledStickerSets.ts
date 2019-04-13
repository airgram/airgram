import { StickerSetsUnion } from '../outputs'

/**
 * Searches for installed sticker sets by looking for specified query in their title
 * and name
 * @param {Object} params
 * @param {boolean} [params.isMasks] - Pass true to return mask sticker sets; pass
 * false to return ordinary sticker sets
 * @param {string} [params.query] - Query to search for
 * @param {number} [params.limit] - Maximum number of sticker sets to return
 * @param {Object} state
 * @returns {StickerSetsUnion}
 */
export type SearchInstalledStickerSetsMethod = <ResponseT = StickerSetsUnion>(
  params: SearchInstalledStickerSetsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SearchInstalledStickerSetsParams {
  /** Pass true to return mask sticker sets; pass false to return ordinary sticker sets */
  isMasks?: boolean
  /** Query to search for */
  query?: string
  /** Maximum number of sticker sets to return */
  limit?: number
}
