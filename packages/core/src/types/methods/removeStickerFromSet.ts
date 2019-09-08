import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputFileInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface RemoveStickerFromSetParams {
  sticker?: InputFileInputUnion // Sticker
}

/**
 * Removes a sticker from the set to which it belongs; for bots only. The sticker set
 * must have been created by the bot
 * @param {Object} params
 * @param {InputFileInputUnion} [params.sticker] - Sticker
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RemoveStickerFromSetParams, OkUnion>>}
 */
export type removeStickerFromSet<ExtensionT> = (
  params?: RemoveStickerFromSetParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<RemoveStickerFromSetParams, OkUnion> & ExtensionT>
