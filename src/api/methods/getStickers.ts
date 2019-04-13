import { StickersUnion } from '../outputs'

/**
 * Returns stickers from the installed sticker sets that correspond to a given emoji.
 * If the emoji is not empty, favorite and recently used stickers may also be returned
 * @param {Object} params
 * @param {string} [params.emoji] - String representation of emoji. If empty, returns
 * all known installed stickers
 * @param {number} [params.limit] - Maximum number of stickers to be returned
 * @param {Object} state
 * @returns {StickersUnion}
 */
export type GetStickersMethod = <ResponseT = StickersUnion>(
  params: GetStickersParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetStickersParams {
  /** String representation of emoji. If empty, returns all known installed stickers */
  emoji?: string
  /** Maximum number of stickers to be returned */
  limit?: number
}
