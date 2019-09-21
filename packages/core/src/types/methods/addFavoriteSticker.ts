import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputFileInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface AddFavoriteStickerParams {
  sticker?: InputFileInputUnion // Sticker file to add
}

/**
 * Adds a new sticker to the list of favorite stickers. The new sticker is added to
 * the top of the list. If the sticker was already in the list, it is removed from the
 * list first. Only stickers belonging to a sticker set can be added to this list
 * @param {Object} params
 * @param {InputFileInputUnion} [params.sticker] - Sticker file to add
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AddFavoriteStickerParams, OkUnion>>}
 */
export type addFavoriteSticker = (
  params?: AddFavoriteStickerParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<AddFavoriteStickerParams, OkUnion>>
