import { WallpapersUnion } from '../outputs'

/**
 * Returns background wallpapers
 * @param {Object} state
 * @returns {WallpapersUnion}
 */
export type GetWallpapersMethod = <ResponseT = WallpapersUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
