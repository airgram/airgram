import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatListInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface ToggleChatIsPinnedParams {
  chatList?: ChatListInputUnion // Chat list in which to change the pinned state of the chat
  chatId?: number // Chat identifier
  isPinned?: boolean // True, if the chat is pinned
}

/**
 * Changes the pinned state of a chat. You can pin up to GetOption("pinned_chat_count_max")/GetOption("pinned_archived_chat_count_max")
 * non-secret chats and the same number of secret chats in the main/arhive chat list
 * @param {Object} params
 * @param {ChatListInputUnion} [params.chatList] - Chat list in which to change the
 * pinned state of the chat
 * @param {number} [params.chatId] - Chat identifier
 * @param {boolean} [params.isPinned] - True, if the chat is pinned
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleChatIsPinnedParams, OkUnion>>}
 */
export type toggleChatIsPinned = (
  params?: ToggleChatIsPinnedParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleChatIsPinnedParams, OkUnion>>
