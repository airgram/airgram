import { ApiRequestOptions, ApiResponse } from '../airgram'
import { StickerSetsUnion } from '../outputs'

export interface GetAttachedStickerSetsParams {
  fileId?: number // File identifier
}

/**
 * Returns a list of sticker sets attached to a file. Currently only photos and videos
 * can have attached sticker sets
 * @param {Object} params
 * @param {number} [params.fileId] - File identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetAttachedStickerSetsParams, StickerSetsUnion>>}
 */
export type getAttachedStickerSets<ExtensionT> = (
  params?: GetAttachedStickerSetsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetAttachedStickerSetsParams, StickerSetsUnion> & ExtensionT>
