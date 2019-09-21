import { ApiRequestOptions, ApiResponse } from '../airgram'
import { StickersUnion } from '../outputs'

export interface GetRecentStickersParams {
  isAttached?: boolean // Pass true to return stickers and masks that were recently attached to photos or video files; pass false to return recently sent stickers
}

/**
 * Returns a list of recently used stickers
 * @param {Object} params
 * @param {boolean} [params.isAttached] - Pass true to return stickers and masks
 * that were recently attached to photos or video files; pass false to return recently
 * sent stickers
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetRecentStickersParams, StickersUnion>>}
 */
export type getRecentStickers = (
  params?: GetRecentStickersParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetRecentStickersParams, StickersUnion>>
