import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatListInputUnion } from '../inputs'
import { ChatsUnion } from '../outputs'

export interface GetChatsParams {
  chatList?: ChatListInputUnion // The chat list in which to return chats
  offsetOrder?: string // Chat order to return chats from
  offsetChatId?: number // Chat identifier to return chats from
  limit?: number // The maximum number of chats to be returned. It is possible that fewer chats than the limit are returned even if the end of the list is not reached
}

/**
 * Returns an ordered list of chats in a chat list. Chats are sorted by the pair (order,
 * chat_id) in decreasing order. (For example, to get a list of chats from the beginning,
 * the offset_order should be equal to a biggest signed 64-bit number 9223372036854775807
 * == 2^63 - 1). For optimal performance the number of returned chats is chosen by the
 * library
 * @param {Object} params
 * @param {ChatListInputUnion} [params.chatList] - The chat list in which to return
 * chats
 * @param {string} [params.offsetOrder] - Chat order to return chats from
 * @param {number} [params.offsetChatId] - Chat identifier to return chats from
 * @param {number} [params.limit] - The maximum number of chats to be returned. It
 * is possible that fewer chats than the limit are returned even if the end of the list
 * is not reached
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatsParams, ChatsUnion>>}
 */
export type getChats = (
  params?: GetChatsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatsParams, ChatsUnion>>
