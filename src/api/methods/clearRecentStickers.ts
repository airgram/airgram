import { OkUnion } from '../outputs'

/**
 * Clears the list of recently used stickers
 * @param {Object} params
 * @param {boolean} [params.isAttached] - Pass true to clear the list of stickers
 * recently attached to photo or video files; pass false to clear the list of recently
 * sent stickers
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ClearRecentStickersMethod = <ResponseT = OkUnion>(
  params: ClearRecentStickersParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ClearRecentStickersParams {
  /**
   * Pass true to clear the list of stickers recently attached to photo or video files;
   * pass false to clear the list of recently sent stickers
   */
  isAttached?: boolean
}
