import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatsUnion } from '../outputs'

export interface SearchChatsParams {
  query?: string // Query to search for. If the query is empty, returns up to 20 recently found chats
  limit?: number // Maximum number of chats to be returned
}

/**
 * Searches for the specified query in the title and username of already known chats,
 * this is an offline request. Returns chats in the order seen in the chat list
 * @param {Object} params
 * @param {string} [params.query] - Query to search for. If the query is empty, returns
 * up to 20 recently found chats
 * @param {number} [params.limit] - Maximum number of chats to be returned
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchChatsParams, ChatsUnion>>}
 */
export type searchChats = (
  params?: SearchChatsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchChatsParams, ChatsUnion>>
