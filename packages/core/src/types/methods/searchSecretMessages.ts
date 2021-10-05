import { ApiRequestOptions, ApiResponse } from '../airgram'
import { SearchMessagesFilterInputUnion } from '../inputs'
import { FoundMessagesUnion } from '../outputs'

export interface SearchSecretMessagesParams {
  chatId?: number // Identifier of the chat in which to search. Specify 0 to search in all secret chats
  query?: string // Query to search for. If empty, searchChatMessages must be used instead
  offset?: string // Offset of the first entry to return as received from the previous request; use empty string to get first chunk of results
  limit?: number // The maximum number of messages to be returned; up to 100. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit
  filter?: SearchMessagesFilterInputUnion // Additional filter for messages to search; pass null to search for all messages
}

/**
 * Searches for messages in secret chats. Returns the results in reverse chronological
 * order. For optimal performance, the number of returned messages is chosen by TDLib
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat in which to search. Specify
 * 0 to search in all secret chats
 * @param {string} [params.query] - Query to search for. If empty, searchChatMessages
 * must be used instead
 * @param {string} [params.offset] - Offset of the first entry to return as received
 * from the previous request; use empty string to get first chunk of results
 * @param {number} [params.limit] - The maximum number of messages to be returned;
 * up to 100. For optimal performance, the number of returned messages is chosen by
 * TDLib and can be smaller than the specified limit
 * @param {SearchMessagesFilterInputUnion} [params.filter] - Additional filter for
 * messages to search; pass null to search for all messages
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchSecretMessagesParams, FoundMessagesUnion>>}
 */
export type searchSecretMessages = (
  params?: SearchSecretMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchSecretMessagesParams, FoundMessagesUnion>>
