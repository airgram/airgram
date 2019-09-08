import { ApiRequestOptions, ApiResponse } from '../airgram'
import { StickersUnion } from '../outputs'

export interface GetStickersParams {
  emoji?: string // String representation of emoji. If empty, returns all known installed stickers
  limit?: number // Maximum number of stickers to be returned
}

/**
 * Returns stickers from the installed sticker sets that correspond to a given emoji.
 * If the emoji is not empty, favorite and recently used stickers may also be returned
 * @param {Object} params
 * @param {string} [params.emoji] - String representation of emoji. If empty, returns
 * all known installed stickers
 * @param {number} [params.limit] - Maximum number of stickers to be returned
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetStickersParams, StickersUnion>>}
 */
export type getStickers<ExtensionT> = (
  params?: GetStickersParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetStickersParams, StickersUnion> & ExtensionT>
