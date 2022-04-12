import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ToggleChatHasProtectedContentParams {
  chatId?: number // Chat identifier
  hasProtectedContent?: boolean // New value of has_protected_content
}

/**
 * Changes the ability of users to save, forward, or copy chat content. Supported only
 * for basic groups, supergroups and channels. Requires owner privileges
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {boolean} [params.hasProtectedContent] - New value of has_protected_content
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleChatHasProtectedContentParams, OkUnion>>}
 */
export type toggleChatHasProtectedContent = (
  params?: ToggleChatHasProtectedContentParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleChatHasProtectedContentParams, OkUnion>>
