import { InputFileInputUnion } from '../inputs'
import { StickersUnion } from '../outputs'

/**
 * Manually adds a new sticker to the list of recently used stickers. The new sticker
 * is added to the top of the list. If the sticker was already in the list, it is removed
 * from the list first. Only stickers belonging to a sticker set can be added to this
 * list
 * @param {Object} params
 * @param {boolean} [params.isAttached] - Pass true to add the sticker to the list
 * of stickers recently attached to photo or video files; pass false to add the sticker
 * to the list of recently sent stickers
 * @param {InputFileInputUnion} [params.sticker] - Sticker file to add
 * @param {Object} state
 * @returns {StickersUnion}
 */
export type AddRecentStickerMethod = <ResponseT = StickersUnion>(
  params: AddRecentStickerParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface AddRecentStickerParams {
  /**
   * Pass true to add the sticker to the list of stickers recently attached to photo or
   * video files; pass false to add the sticker to the list of recently sent stickers
   */
  isAttached?: boolean
  /** Sticker file to add */
  sticker?: InputFileInputUnion
}
