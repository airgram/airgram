import { StickersUnion } from '../outputs'

/**
 * Returns favorite stickers
 * @param {Object} state
 * @returns {StickersUnion}
 */
export type GetFavoriteStickersMethod = <ResponseT = StickersUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
