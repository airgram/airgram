import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatListInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface LoadChatsParams {
  chatList?: ChatListInputUnion // The chat list in which to load chats; pass null to load chats from the main chat list
  limit?: number // The maximum number of chats to be loaded. For optimal performance, the number of loaded chats is chosen by TDLib and can be smaller than the specified limit, even if the end of the list is not reached
}

/**
 * Loads more chats from a chat list. The loaded chats and their positions in the chat
 * list will be sent through updates. Chats are sorted by the pair (chat.position.order,
 * chat.id) in descending order. Returns a 404 error if all chats has been loaded
 * @param {Object} params
 * @param {ChatListInputUnion} [params.chatList] - The chat list in which to load
 * chats; pass null to load chats from the main chat list
 * @param {number} [params.limit] - The maximum number of chats to be loaded. For
 * optimal performance, the number of loaded chats is chosen by TDLib and can be smaller
 * than the specified limit, even if the end of the list is not reached
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<LoadChatsParams, OkUnion>>}
 */
export type loadChats = (
  params?: LoadChatsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<LoadChatsParams, OkUnion>>
