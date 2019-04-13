import { StickersUnion } from '../outputs'

/**
 * Returns a list of recently used stickers
 * @param {Object} params
 * @param {boolean} [params.isAttached] - Pass true to return stickers and masks
 * that were recently attached to photos or video files; pass false to return recently
 * sent stickers
 * @param {Object} state
 * @returns {StickersUnion}
 */
export type GetRecentStickersMethod = <ResponseT = StickersUnion>(
  params: GetRecentStickersParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetRecentStickersParams {
  /**
   * Pass true to return stickers and masks that were recently attached to photos or video
   * files; pass false to return recently sent stickers
   */
  isAttached?: boolean
}
