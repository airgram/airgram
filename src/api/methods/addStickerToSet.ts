import { InputStickerInput } from '../inputs'
import { StickerSetUnion } from '../outputs'

/**
 * Adds a new sticker to a set; for bots only. Returns the sticker set
 * @param {Object} params
 * @param {number} [params.userId] - Sticker set owner
 * @param {string} [params.name] - Sticker set name
 * @param {InputStickerInput} [params.sticker] - Sticker to add to the set
 * @param {Object} state
 * @returns {StickerSetUnion}
 */
export type AddStickerToSetMethod = <ResponseT = StickerSetUnion>(
  params: AddStickerToSetParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface AddStickerToSetParams {
  /** Sticker set owner */
  userId?: number
  /** Sticker set name */
  name?: string
  /** Sticker to add to the set */
  sticker?: InputStickerInput
}
