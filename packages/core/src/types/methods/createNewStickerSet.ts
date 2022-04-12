import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputStickerInput } from '../inputs'
import { StickerSetUnion } from '../outputs'

export interface CreateNewStickerSetParams {
  userId?: number // Sticker set owner; ignored for regular users
  title?: string // Sticker set title; 1-64 characters
  name?: string // Sticker set name. Can contain only English letters, digits and underscores. Must end with *"_by_<bot username>"* (*<bot_username>* is case insensitive) for bots; 1-64 characters
  stickers?: InputStickerInput[] // List of stickers to be added to the set; must be non-empty. All stickers must have the same format. For TGS stickers, uploadStickerFile must be used before the sticker is shown
  source?: string // Source of the sticker set; may be empty if unknown
}

/**
 * Creates a new sticker set. Returns the newly created sticker set
 * @param {Object} params
 * @param {number} [params.userId] - Sticker set owner; ignored for regular users
 * @param {string} [params.title] - Sticker set title; 1-64 characters
 * @param {string} [params.name] - Sticker set name. Can contain only English letters,
 * digits and underscores. Must end with *"_by_<bot username>"* (*<bot_username>* is
 * case insensitive) for bots; 1-64 characters
 * @param {InputStickerInput[]} [params.stickers] - List of stickers to be added
 * to the set; must be non-empty. All stickers must have the same format. For TGS stickers,
 * uploadStickerFile must be used before the sticker is shown
 * @param {string} [params.source] - Source of the sticker set; may be empty if unknown
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CreateNewStickerSetParams, StickerSetUnion>>}
 */
export type createNewStickerSet = (
  params?: CreateNewStickerSetParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CreateNewStickerSetParams, StickerSetUnion>>
