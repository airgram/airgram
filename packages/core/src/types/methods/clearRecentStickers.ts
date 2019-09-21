import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ClearRecentStickersParams {
  isAttached?: boolean // Pass true to clear the list of stickers recently attached to photo or video files; pass false to clear the list of recently sent stickers
}

/**
 * Clears the list of recently used stickers
 * @param {Object} params
 * @param {boolean} [params.isAttached] - Pass true to clear the list of stickers
 * recently attached to photo or video files; pass false to clear the list of recently
 * sent stickers
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ClearRecentStickersParams, OkUnion>>}
 */
export type clearRecentStickers = (
  params?: ClearRecentStickersParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ClearRecentStickersParams, OkUnion>>
