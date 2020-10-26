import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ToggleChatIsBlockedParams {
  chatId?: number // Chat identifier
  isBlocked?: boolean // New value of is_blocked
}

/**
 * Changes the block state of a chat. Currently, only private chats and supergroups
 * can be blocked
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {boolean} [params.isBlocked] - New value of is_blocked
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleChatIsBlockedParams, OkUnion>>}
 */
export type toggleChatIsBlocked = (
  params?: ToggleChatIsBlockedParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleChatIsBlockedParams, OkUnion>>
