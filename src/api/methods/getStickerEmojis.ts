import { InputFileInputUnion } from '../inputs'
import { StickerEmojisUnion } from '../outputs'

/**
 * Returns emoji corresponding to a sticker
 * @param {Object} params
 * @param {InputFileInputUnion} [params.sticker] - Sticker file identifier
 * @param {Object} state
 * @returns {StickerEmojisUnion}
 */
export type GetStickerEmojisMethod = <ResponseT = StickerEmojisUnion>(
  params: GetStickerEmojisParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetStickerEmojisParams {
  /** Sticker file identifier */
  sticker?: InputFileInputUnion
}
