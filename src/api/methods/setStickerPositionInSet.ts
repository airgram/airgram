import { InputFileInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Changes the position of a sticker in the set to which it belongs; for bots only.
 * The sticker set must have been created by the bot
 * @param {Object} params
 * @param {InputFileInputUnion} [params.sticker] - Sticker
 * @param {number} [params.position] - New position of the sticker in the set, zero-based
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetStickerPositionInSetMethod = <ResponseT = OkUnion>(
  params: SetStickerPositionInSetParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetStickerPositionInSetParams {
  /** Sticker */
  sticker?: InputFileInputUnion
  /** New position of the sticker in the set, zero-based */
  position?: number
}
