import { ApiRequestOptions, ApiResponse } from '../airgram'
import { SearchMessagesFilterInputUnion } from '../inputs'
import { FoundMessagesUnion } from '../outputs'

export interface SearchSecretMessagesParams {
  chatId?: number // Identifier of the chat in which to search. Specify 0 to search in all secret chats
  query?: string // Query to search for. If empty, searchChatMessages should be used instead
  fromSearchId?: string // The identifier from the result of a previous request, use 0 to get results from the last message
  limit?: number // Maximum number of messages to be returned; up to 100. Fewer messages may be returned than specified by the limit, even if the end of the message history has not been reached
  filter?: SearchMessagesFilterInputUnion // A filter for the content of messages in the search results
}

/**
 * Searches for messages in secret chats. Returns the results in reverse chronological
 * order. For optimal performance the number of returned messages is chosen by the library
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat in which to search. Specify
 * 0 to search in all secret chats
 * @param {string} [params.query] - Query to search for. If empty, searchChatMessages
 * should be used instead
 * @param {string} [params.fromSearchId] - The identifier from the result of a previous
 * request, use 0 to get results from the last message
 * @param {number} [params.limit] - Maximum number of messages to be returned; up
 * to 100. Fewer messages may be returned than specified by the limit, even if the end
 * of the message history has not been reached
 * @param {SearchMessagesFilterInputUnion} [params.filter] - A filter for the content
 * of messages in the search results
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchSecretMessagesParams, FoundMessagesUnion>>}
 */
export type searchSecretMessages = (
  params?: SearchSecretMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchSecretMessagesParams, FoundMessagesUnion>>
