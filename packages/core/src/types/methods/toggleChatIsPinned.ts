import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ToggleChatIsPinnedParams {
  chatId?: number // Chat identifier
  isPinned?: boolean // New value of is_pinned
}

/**
 * Changes the pinned state of a chat. You can pin up to GetOption("pinned_chat_count_max")/GetOption("pinned_archived_chat_count_max")
 * non-secret chats and the same number of secret chats in the main/archive chat list
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {boolean} [params.isPinned] - New value of is_pinned
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleChatIsPinnedParams, OkUnion>>}
 */
export type toggleChatIsPinned = (
  params?: ToggleChatIsPinnedParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleChatIsPinnedParams, OkUnion>>
