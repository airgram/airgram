import { InputFileInputUnion } from '../inputs'
import { FileUnion } from '../outputs'

/**
 * Uploads a PNG image with a sticker; for bots only; returns the uploaded file
 * @param {Object} params
 * @param {number} [params.userId] - Sticker file owner
 * @param {InputFileInputUnion} [params.pngSticker] - PNG image with the sticker;
 * must be up to 512 kB in size and fit in 512x512 square
 * @param {Object} state
 * @returns {FileUnion}
 */
export type UploadStickerFileMethod = <ResponseT = FileUnion>(
  params: UploadStickerFileParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface UploadStickerFileParams {
  /** Sticker file owner */
  userId?: number
  /** PNG image with the sticker; must be up to 512 kB in size and fit in 512x512 square */
  pngSticker?: InputFileInputUnion
}
