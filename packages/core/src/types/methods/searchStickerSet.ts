import { ApiRequestOptions, ApiResponse } from '../airgram'
import { StickerSetUnion } from '../outputs'

export interface SearchStickerSetParams {
  name?: string // Name of the sticker set
}

/**
 * Searches for a sticker set by its name
 * @param {Object} params
 * @param {string} [params.name] - Name of the sticker set
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchStickerSetParams, StickerSetUnion>>}
 */
export type searchStickerSet = (
  params?: SearchStickerSetParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchStickerSetParams, StickerSetUnion>>
