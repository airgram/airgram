import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputFileInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetStickerPositionInSetParams {
  sticker?: InputFileInputUnion // Sticker
  position?: number // New position of the sticker in the set, zero-based
}

/**
 * Changes the position of a sticker in the set to which it belongs; for bots only.
 * The sticker set must have been created by the bot
 * @param {Object} params
 * @param {InputFileInputUnion} [params.sticker] - Sticker
 * @param {number} [params.position] - New position of the sticker in the set, zero-based
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetStickerPositionInSetParams, OkUnion>>}
 */
export type setStickerPositionInSet = (
  params?: SetStickerPositionInSetParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetStickerPositionInSetParams, OkUnion>>
