import { InputFileInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Adds a new sticker to the list of favorite stickers. The new sticker is added to
 * the top of the list. If the sticker was already in the list, it is removed from the
 * list first. Only stickers belonging to a sticker set can be added to this list
 * @param {Object} params
 * @param {InputFileInputUnion} [params.sticker] - Sticker file to add
 * @param {Object} state
 * @returns {OkUnion}
 */
export type AddFavoriteStickerMethod = <ResponseT = OkUnion>(
  params: AddFavoriteStickerParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface AddFavoriteStickerParams {
  /** Sticker file to add */
  sticker?: InputFileInputUnion
}
