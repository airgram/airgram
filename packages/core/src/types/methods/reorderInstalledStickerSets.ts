import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ReorderInstalledStickerSetsParams {
  isMasks?: boolean // Pass true to change the order of mask sticker sets; pass false to change the order of ordinary sticker sets
  stickerSetIds?: string[] // Identifiers of installed sticker sets in the new correct order
}

/**
 * Changes the order of installed sticker sets
 * @param {Object} params
 * @param {boolean} [params.isMasks] - Pass true to change the order of mask sticker
 * sets; pass false to change the order of ordinary sticker sets
 * @param {string[]} [params.stickerSetIds] - Identifiers of installed sticker sets
 * in the new correct order
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ReorderInstalledStickerSetsParams, OkUnion>>}
 */
export type reorderInstalledStickerSets<ExtensionT> = (
  params?: ReorderInstalledStickerSetsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ReorderInstalledStickerSetsParams, OkUnion> & ExtensionT>
