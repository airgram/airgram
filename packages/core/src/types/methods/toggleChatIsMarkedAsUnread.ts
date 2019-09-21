import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ToggleChatIsMarkedAsUnreadParams {
  chatId?: number // Chat identifier
  isMarkedAsUnread?: boolean // New value of is_marked_as_unread
}

/**
 * Changes the marked as unread state of a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {boolean} [params.isMarkedAsUnread] - New value of is_marked_as_unread
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleChatIsMarkedAsUnreadParams, OkUnion>>}
 */
export type toggleChatIsMarkedAsUnread = (
  params?: ToggleChatIsMarkedAsUnreadParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleChatIsMarkedAsUnreadParams, OkUnion>>
