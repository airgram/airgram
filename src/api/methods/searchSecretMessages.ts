import { SearchMessagesFilterInputUnion } from '../inputs'
import { FoundMessagesUnion } from '../outputs'

/**
 * Searches for messages in secret chats. Returns the results in reverse chronological
 * order. For optimal performance the number of returned messages is chosen by the library
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat in which to search. Specify
 * 0 to search in all secret chats
 * @param {string} [params.query] - Query to search for. If empty, searchChatMessages
 * should be used instead
 * @param {number | string} [params.fromSearchId] - The identifier from the result
 * of a previous request, use 0 to get results from the last message
 * @param {number} [params.limit] - Maximum number of messages to be returned; up
 * to 100. Fewer messages may be returned than specified by the limit, even if the end
 * of the message history has not been reached
 * @param {SearchMessagesFilterInputUnion} [params.filter] - A filter for the content
 * of messages in the search results
 * @param {Object} state
 * @returns {FoundMessagesUnion}
 */
export type SearchSecretMessagesMethod = <ResponseT = FoundMessagesUnion>(
  params: SearchSecretMessagesParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SearchSecretMessagesParams {
  /** Identifier of the chat in which to search. Specify 0 to search in all secret chats */
  chatId?: number
  /** Query to search for. If empty, searchChatMessages should be used instead */
  query?: string
  /**
   * The identifier from the result of a previous request, use 0 to get results from the
   * last message
   */
  fromSearchId?: number | string
  /**
   * Maximum number of messages to be returned; up to 100. Fewer messages may be returned
   * than specified by the limit, even if the end of the message history has not been
   * reached
   */
  limit?: number
  /** A filter for the content of messages in the search results */
  filter?: SearchMessagesFilterInputUnion
}
