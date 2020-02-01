import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatsUnion } from '../outputs'

export interface SearchChatsOnServerParams {
  query?: string // Query to search for
  limit?: number // The maximum number of chats to be returned
}

/**
 * Searches for the specified query in the title and username of already known chats
 * via request to the server. Returns chats in the order seen in the chat list
 * @param {Object} params
 * @param {string} [params.query] - Query to search for
 * @param {number} [params.limit] - The maximum number of chats to be returned
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchChatsOnServerParams, ChatsUnion>>}
 */
export type searchChatsOnServer = (
  params?: SearchChatsOnServerParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchChatsOnServerParams, ChatsUnion>>
