import { ApiRequestOptions, ApiResponse } from '../airgram'
import { StickersUnion } from '../outputs'

export interface SearchStickersParams {
  emoji?: string // String representation of emoji; must be non-empty
  limit?: number // The maximum number of stickers to be returned
}

/**
 * Searches for stickers from public sticker sets that correspond to a given emoji
 * @param {Object} params
 * @param {string} [params.emoji] - String representation of emoji; must be non-empty
 * @param {number} [params.limit] - The maximum number of stickers to be returned
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchStickersParams, StickersUnion>>}
 */
export type searchStickers = (
  params?: SearchStickersParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchStickersParams, StickersUnion>>
