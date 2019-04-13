import { OkUnion } from '../outputs'

/**
 * Changes the order of installed sticker sets
 * @param {Object} params
 * @param {boolean} [params.isMasks] - Pass true to change the order of mask sticker
 * sets; pass false to change the order of ordinary sticker sets
 * @param {number | string[]} [params.stickerSetIds] - Identifiers of installed sticker
 * sets in the new correct order
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ReorderInstalledStickerSetsMethod = <ResponseT = OkUnion>(
  params: ReorderInstalledStickerSetsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ReorderInstalledStickerSetsParams {
  /**
   * Pass true to change the order of mask sticker sets; pass false to change the order
   * of ordinary sticker sets
   */
  isMasks?: boolean
  /** Identifiers of installed sticker sets in the new correct order */
  stickerSetIds?: number | string[]
}
