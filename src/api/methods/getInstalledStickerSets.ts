import { StickerSetsUnion } from '../outputs'

/**
 * Returns a list of installed sticker sets
 * @param {Object} params
 * @param {boolean} [params.isMasks] - Pass true to return mask sticker sets; pass
 * false to return ordinary sticker sets
 * @param {Object} state
 * @returns {StickerSetsUnion}
 */
export type GetInstalledStickerSetsMethod = <ResponseT = StickerSetsUnion>(
  params: GetInstalledStickerSetsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetInstalledStickerSetsParams {
  /** Pass true to return mask sticker sets; pass false to return ordinary sticker sets */
  isMasks?: boolean
}
