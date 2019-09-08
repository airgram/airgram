import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ChangeStickerSetParams {
  setId?: string // Identifier of the sticker set
  isInstalled?: boolean // The new value of is_installed
  isArchived?: boolean // The new value of is_archived. A sticker set can't be installed and archived simultaneously
}

/**
 * Installs/uninstalls or activates/archives a sticker set
 * @param {Object} params
 * @param {string} [params.setId] - Identifier of the sticker set
 * @param {boolean} [params.isInstalled] - The new value of is_installed
 * @param {boolean} [params.isArchived] - The new value of is_archived. A sticker
 * set can't be installed and archived simultaneously
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ChangeStickerSetParams, OkUnion>>}
 */
export type changeStickerSet<ExtensionT> = (
  params?: ChangeStickerSetParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ChangeStickerSetParams, OkUnion> & ExtensionT>
