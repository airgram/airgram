import { OkUnion } from '../outputs'

/**
 * Installs/uninstalls or activates/archives a sticker set
 * @param {Object} params
 * @param {number | string} [params.setId] - Identifier of the sticker set
 * @param {boolean} [params.isInstalled] - The new value of is_installed
 * @param {boolean} [params.isArchived] - The new value of is_archived. A sticker
 * set can't be installed and archived simultaneously
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ChangeStickerSetMethod = <ResponseT = OkUnion>(
  params: ChangeStickerSetParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ChangeStickerSetParams {
  /** Identifier of the sticker set */
  setId?: number | string
  /** The new value of is_installed */
  isInstalled?: boolean
  /** The new value of is_archived. A sticker set can't be installed and archived simultaneously */
  isArchived?: boolean
}
