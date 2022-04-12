import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatListInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface ToggleChatIsPinnedParams {
  chatList?: ChatListInputUnion // Chat list in which to change the pinned state of the chat
  chatId?: number // Chat identifier
  isPinned?: boolean // Pass true to pin the chat; pass false to unpin it
}

/**
 * Changes the pinned state of a chat. There can be up to GetOption("pinned_chat_count_max")/GetOption("pinned_archived_chat_count_max")
 * pinned non-secret chats and the same number of secret chats in the main/archive chat
 * list
 * @param {Object} params
 * @param {ChatListInputUnion} [params.chatList] - Chat list in which to change the
 * pinned state of the chat
 * @param {number} [params.chatId] - Chat identifier
 * @param {boolean} [params.isPinned] - Pass true to pin the chat; pass false to
 * unpin it
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleChatIsPinnedParams, OkUnion>>}
 */
export type toggleChatIsPinned = (
  params?: ToggleChatIsPinnedParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleChatIsPinnedParams, OkUnion>>
