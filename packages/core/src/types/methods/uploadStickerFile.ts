import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputStickerInputUnion } from '../inputs'
import { FileUnion } from '../outputs'

export interface UploadStickerFileParams {
  userId?: number // Sticker file owner; ignored for regular users
  sticker?: InputStickerInputUnion // Sticker file to upload
}

/**
 * Uploads a PNG image with a sticker; returns the uploaded file
 * @param {Object} params
 * @param {number} [params.userId] - Sticker file owner; ignored for regular users
 * @param {InputStickerInputUnion} [params.sticker] - Sticker file to upload
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<UploadStickerFileParams, FileUnion>>}
 */
export type uploadStickerFile = (
  params?: UploadStickerFileParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<UploadStickerFileParams, FileUnion>>
