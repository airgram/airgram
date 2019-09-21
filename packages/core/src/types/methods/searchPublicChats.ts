import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatsUnion } from '../outputs'

export interface SearchPublicChatsParams {
  query?: string // Query to search for
}

/**
 * Searches public chats by looking for specified query in their username and title.
 * Currently only private chats, supergroups and channels can be public. Returns a meaningful
 * number of results. Returns nothing if the length of the searched username prefix
 * is less than 5. Excludes private chats with contacts and chats from the chat list
 * from the results
 * @param {Object} params
 * @param {string} [params.query] - Query to search for
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchPublicChatsParams, ChatsUnion>>}
 */
export type searchPublicChats = (
  params?: SearchPublicChatsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchPublicChatsParams, ChatsUnion>>
