import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatListInputUnion } from '../inputs'
import { ChatsUnion } from '../outputs'

export interface GetChatsParams {
  chatList?: ChatListInputUnion // The chat list in which to return chats; pass null to get chats from the main chat list
  limit?: number // The maximum number of chats to be returned
}

/**
 * Returns an ordered list of chats from the beginning of a chat list. For informational
 * purposes only. Use loadChats and updates processing instead to maintain chat lists
 * in a consistent state
 * @param {Object} params
 * @param {ChatListInputUnion} [params.chatList] - The chat list in which to return
 * chats; pass null to get chats from the main chat list
 * @param {number} [params.limit] - The maximum number of chats to be returned
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatsParams, ChatsUnion>>}
 */
export type getChats = (
  params?: GetChatsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatsParams, ChatsUnion>>
