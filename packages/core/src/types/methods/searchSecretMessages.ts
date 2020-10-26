import { ApiRequestOptions, ApiResponse } from '../airgram'
import { SearchMessagesFilterInputUnion } from '../inputs'
import { FoundMessagesUnion } from '../outputs'

export interface SearchSecretMessagesParams {
  chatId?: number // Identifier of the chat in which to search. Specify 0 to search in all secret chats
  query?: string // Query to search for. If empty, searchChatMessages should be used instead
  offset?: string // Offset of the first entry to return as received from the previous request; use empty string to get first chunk of results
  limit?: number // The maximum number of messages to be returned; up to 100. Fewer messages may be returned than specified by the limit, even if the end of the message history has not been reached
  filter?: SearchMessagesFilterInputUnion // A filter for message content in the search results
}

/**
 * Searches for messages in secret chats. Returns the results in reverse chronological
 * order. For optimal performance the number of returned messages is chosen by the library
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat in which to search. Specify
 * 0 to search in all secret chats
 * @param {string} [params.query] - Query to search for. If empty, searchChatMessages
 * should be used instead
 * @param {string} [params.offset] - Offset of the first entry to return as received
 * from the previous request; use empty string to get first chunk of results
 * @param {number} [params.limit] - The maximum number of messages to be returned;
 * up to 100. Fewer messages may be returned than specified by the limit, even if the
 * end of the message history has not been reached
 * @param {SearchMessagesFilterInputUnion} [params.filter] - A filter for message
 * content in the search results
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchSecretMessagesParams, FoundMessagesUnion>>}
 */
export type searchSecretMessages = (
  params?: SearchSecretMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchSecretMessagesParams, FoundMessagesUnion>>
