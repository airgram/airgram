import { OkUnion } from '../outputs'

/**
 * Informs the server that some trending sticker sets have been viewed by the user
 * @param {Object} params
 * @param {number | string[]} [params.stickerSetIds] - Identifiers of viewed trending
 * sticker sets
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ViewTrendingStickerSetsMethod = <ResponseT = OkUnion>(
  params: ViewTrendingStickerSetsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ViewTrendingStickerSetsParams {
  /** Identifiers of viewed trending sticker sets */
  stickerSetIds?: number | string[]
}
