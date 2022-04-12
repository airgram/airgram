import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputStickerInput } from '../inputs'
import { StickerSetUnion } from '../outputs'

export interface AddStickerToSetParams {
  userId?: number // Sticker set owner
  name?: string // Sticker set name
  sticker?: InputStickerInput // Sticker to add to the set
}

/**
 * Adds a new sticker to a set; for bots only. Returns the sticker set
 * @param {Object} params
 * @param {number} [params.userId] - Sticker set owner
 * @param {string} [params.name] - Sticker set name
 * @param {InputStickerInput} [params.sticker] - Sticker to add to the set
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AddStickerToSetParams, StickerSetUnion>>}
 */
export type addStickerToSet = (
  params?: AddStickerToSetParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<AddStickerToSetParams, StickerSetUnion>>
