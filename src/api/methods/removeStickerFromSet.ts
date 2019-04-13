import { InputFileInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Removes a sticker from the set to which it belongs; for bots only. The sticker set
 * must have been created by the bot
 * @param {Object} params
 * @param {InputFileInputUnion} [params.sticker] - Sticker
 * @param {Object} state
 * @returns {OkUnion}
 */
export type RemoveStickerFromSetMethod = <ResponseT = OkUnion>(
  params: RemoveStickerFromSetParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface RemoveStickerFromSetParams {
  /** Sticker */
  sticker?: InputFileInputUnion
}
