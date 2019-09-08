import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface DisconnectWebsiteParams {
  websiteId?: string // Website identifier
}

/**
 * Disconnects website from the current user's Telegram account
 * @param {Object} params
 * @param {string} [params.websiteId] - Website identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DisconnectWebsiteParams, OkUnion>>}
 */
export type disconnectWebsite<ExtensionT> = (
  params?: DisconnectWebsiteParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<DisconnectWebsiteParams, OkUnion> & ExtensionT>
