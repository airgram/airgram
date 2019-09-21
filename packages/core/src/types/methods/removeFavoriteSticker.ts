import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputFileInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface RemoveFavoriteStickerParams {
  sticker?: InputFileInputUnion // Sticker file to delete from the list
}

/**
 * Removes a sticker from the list of favorite stickers
 * @param {Object} params
 * @param {InputFileInputUnion} [params.sticker] - Sticker file to delete from the
 * list
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RemoveFavoriteStickerParams, OkUnion>>}
 */
export type removeFavoriteSticker = (
  params?: RemoveFavoriteStickerParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<RemoveFavoriteStickerParams, OkUnion>>
