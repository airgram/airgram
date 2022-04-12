import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputFileInputUnion } from '../inputs'
import { StickerSetUnion } from '../outputs'

export interface SetStickerSetThumbnailParams {
  userId?: number // Sticker set owner
  name?: string // Sticker set name
  thumbnail?: InputFileInputUnion // Thumbnail to set in PNG, TGS, or WEBM format; pass null to remove the sticker set thumbnail. Thumbnail format must match the format of stickers in the set
}

/**
 * Sets a sticker set thumbnail; for bots only. Returns the sticker set
 * @param {Object} params
 * @param {number} [params.userId] - Sticker set owner
 * @param {string} [params.name] - Sticker set name
 * @param {InputFileInputUnion} [params.thumbnail] - Thumbnail to set in PNG, TGS,
 * or WEBM format; pass null to remove the sticker set thumbnail. Thumbnail format must
 * match the format of stickers in the set
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetStickerSetThumbnailParams, StickerSetUnion>>}
 */
export type setStickerSetThumbnail = (
  params?: SetStickerSetThumbnailParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetStickerSetThumbnailParams, StickerSetUnion>>
