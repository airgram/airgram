import { ApiRequestOptions, ApiResponse } from '../airgram'
import { CheckStickerSetNameResultUnion } from '../outputs'

export interface CheckStickerSetNameParams {
  name?: string // Name to be checked
}

/**
 * Checks whether a name can be used for a new sticker set
 * @param {Object} params
 * @param {string} [params.name] - Name to be checked
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CheckStickerSetNameParams, CheckStickerSetNameResultUnion>>}
 */
export type checkStickerSetName = (
  params?: CheckStickerSetNameParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CheckStickerSetNameParams, CheckStickerSetNameResultUnion>>
