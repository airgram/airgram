import { StickerSetsUnion } from '../outputs'

/**
 * Returns a list of sticker sets attached to a file. Currently only photos and videos
 * can have attached sticker sets
 * @param {Object} params
 * @param {number} [params.fileId] - File identifier
 * @param {Object} state
 * @returns {StickerSetsUnion}
 */
export type GetAttachedStickerSetsMethod = <ResponseT = StickerSetsUnion>(
  params: GetAttachedStickerSetsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetAttachedStickerSetsParams {
  /** File identifier */
  fileId?: number
}
