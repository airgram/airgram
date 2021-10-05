import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TextUnion } from '../outputs'

export interface GetSuggestedStickerSetNameParams {
  title?: string // Sticker set title; 1-64 characters
}

/**
 * Returns a suggested name for a new sticker set with a given title
 * @param {Object} params
 * @param {string} [params.title] - Sticker set title; 1-64 characters
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetSuggestedStickerSetNameParams, TextUnion>>}
 */
export type getSuggestedStickerSetName = (
  params?: GetSuggestedStickerSetNameParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetSuggestedStickerSetNameParams, TextUnion>>
