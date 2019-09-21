import { ApiRequestOptions, ApiResponse } from '../airgram'
import { StickerSetsUnion } from '../outputs'

export interface GetInstalledStickerSetsParams {
  isMasks?: boolean // Pass true to return mask sticker sets; pass false to return ordinary sticker sets
}

/**
 * Returns a list of installed sticker sets
 * @param {Object} params
 * @param {boolean} [params.isMasks] - Pass true to return mask sticker sets; pass
 * false to return ordinary sticker sets
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetInstalledStickerSetsParams, StickerSetsUnion>>}
 */
export type getInstalledStickerSets = (
  params?: GetInstalledStickerSetsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetInstalledStickerSetsParams, StickerSetsUnion>>
