import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputStickerInput } from '../inputs'
import { FileUnion } from '../outputs'

export interface UploadStickerFileParams {
  userId?: number // Sticker file owner; ignored for regular users
  sticker?: InputStickerInput // Sticker file to upload
}

/**
 * Uploads a file with a sticker; returns the uploaded file
 * @param {Object} params
 * @param {number} [params.userId] - Sticker file owner; ignored for regular users
 * @param {InputStickerInput} [params.sticker] - Sticker file to upload
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<UploadStickerFileParams, FileUnion>>}
 */
export type uploadStickerFile = (
  params?: UploadStickerFileParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<UploadStickerFileParams, FileUnion>>
