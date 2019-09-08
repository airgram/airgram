import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputFileInputUnion } from '../inputs'
import { FileUnion } from '../outputs'

export interface UploadStickerFileParams {
  userId?: number // Sticker file owner
  pngSticker?: InputFileInputUnion // PNG image with the sticker; must be up to 512 kB in size and fit in 512x512 square
}

/**
 * Uploads a PNG image with a sticker; for bots only; returns the uploaded file
 * @param {Object} params
 * @param {number} [params.userId] - Sticker file owner
 * @param {InputFileInputUnion} [params.pngSticker] - PNG image with the sticker;
 * must be up to 512 kB in size and fit in 512x512 square
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<UploadStickerFileParams, FileUnion>>}
 */
export type uploadStickerFile<ExtensionT> = (
  params?: UploadStickerFileParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<UploadStickerFileParams, FileUnion> & ExtensionT>
