import { InputFileInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Removes a sticker from the list of favorite stickers
 * @param {Object} params
 * @param {InputFileInputUnion} [params.sticker] - Sticker file to delete from the
 * list
 * @param {Object} state
 * @returns {OkUnion}
 */
export type RemoveFavoriteStickerMethod = <ResponseT = OkUnion>(
  params: RemoveFavoriteStickerParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface RemoveFavoriteStickerParams {
  /** Sticker file to delete from the list */
  sticker?: InputFileInputUnion
}
