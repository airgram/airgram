import { ApiRequestOptions, ApiResponse } from '../airgram'
import { StickersUnion } from '../outputs'

/**
 * Returns favorite stickers
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, StickersUnion>>}
 */
export type getFavoriteStickers = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, StickersUnion>>
