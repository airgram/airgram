import { InputFileInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Removes a sticker from the list of recently used stickers
 * @param {Object} params
 * @param {boolean} [params.isAttached] - Pass true to remove the sticker from the
 * list of stickers recently attached to photo or video files; pass false to remove
 * the sticker from the list of recently sent stickers
 * @param {InputFileInputUnion} [params.sticker] - Sticker file to delete
 * @param {Object} state
 * @returns {OkUnion}
 */
export type RemoveRecentStickerMethod = <ResponseT = OkUnion>(
  params: RemoveRecentStickerParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface RemoveRecentStickerParams {
  /**
   * Pass true to remove the sticker from the list of stickers recently attached to photo
   * or video files; pass false to remove the sticker from the list of recently sent stickers
   */
  isAttached?: boolean
  /** Sticker file to delete */
  sticker?: InputFileInputUnion
}
