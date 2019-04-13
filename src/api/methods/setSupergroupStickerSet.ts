import { OkUnion } from '../outputs'

/**
 * Changes the sticker set of a supergroup; requires appropriate rights in the supergroup
 * @param {Object} params
 * @param {number} [params.supergroupId] - Identifier of the supergroup
 * @param {number | string} [params.stickerSetId] - New value of the supergroup sticker
 * set identifier. Use 0 to remove the supergroup sticker set
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetSupergroupStickerSetMethod = <ResponseT = OkUnion>(
  params: SetSupergroupStickerSetParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetSupergroupStickerSetParams {
  /** Identifier of the supergroup */
  supergroupId?: number
  /**
   * New value of the supergroup sticker set identifier. Use 0 to remove the supergroup
   * sticker set
   */
  stickerSetId?: number | string
}
