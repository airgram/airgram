import { StickersUnion } from '../outputs'

/**
 * Searches for stickers from public sticker sets that correspond to a given emoji
 * @param {Object} params
 * @param {string} [params.emoji] - String representation of emoji; must be non-empty
 * @param {number} [params.limit] - Maximum number of stickers to be returned
 * @param {Object} state
 * @returns {StickersUnion}
 */
export type SearchStickersMethod = <ResponseT = StickersUnion>(
  params: SearchStickersParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SearchStickersParams {
  /** String representation of emoji; must be non-empty */
  emoji?: string
  /** Maximum number of stickers to be returned */
  limit?: number
}
