import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputFileInputUnion } from '../inputs'
import { EmojisUnion } from '../outputs'

export interface GetStickerEmojisParams {
  sticker?: InputFileInputUnion // Sticker file identifier
}

/**
 * Returns emoji corresponding to a sticker. The list is only for informational purposes,
 * because a sticker is always sent with a fixed emoji from the corresponding Sticker
 * object
 * @param {Object} params
 * @param {InputFileInputUnion} [params.sticker] - Sticker file identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetStickerEmojisParams, EmojisUnion>>}
 */
export type getStickerEmojis = (
  params?: GetStickerEmojisParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetStickerEmojisParams, EmojisUnion>>
