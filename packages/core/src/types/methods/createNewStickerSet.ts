import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputStickerInputUnion } from '../inputs'
import { StickerSetUnion } from '../outputs'

export interface CreateNewStickerSetParams {
  userId?: number // Sticker set owner
  title?: string // Sticker set title; 1-64 characters
  name?: string // Sticker set name. Can contain only English letters, digits and underscores. Must end with *"_by_<bot username>"* (*<bot_username>* is case insensitive); 1-64 characters
  isMasks?: boolean // True, if stickers are masks. Animated stickers can't be masks
  stickers?: InputStickerInputUnion[] // List of stickers to be added to the set; must be non-empty. All stickers must be of the same type
}

/**
 * Creates a new sticker set; for bots only. Returns the newly created sticker set
 * @param {Object} params
 * @param {number} [params.userId] - Sticker set owner
 * @param {string} [params.title] - Sticker set title; 1-64 characters
 * @param {string} [params.name] - Sticker set name. Can contain only English letters,
 * digits and underscores. Must end with *"_by_<bot username>"* (*<bot_username>* is
 * case insensitive); 1-64 characters
 * @param {boolean} [params.isMasks] - True, if stickers are masks. Animated stickers
 * can't be masks
 * @param {InputStickerInputUnion[]} [params.stickers] - List of stickers to be added
 * to the set; must be non-empty. All stickers must be of the same type
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CreateNewStickerSetParams, StickerSetUnion>>}
 */
export type createNewStickerSet = (
  params?: CreateNewStickerSetParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CreateNewStickerSetParams, StickerSetUnion>>
