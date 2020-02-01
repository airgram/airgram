import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatListInputUnion } from '../inputs'
import { MessagesUnion } from '../outputs'

export interface SearchMessagesParams {
  chatList?: ChatListInputUnion // Chat list in which to search messages; pass null to search in all chats regardless of their chat list
  query?: string // Query to search for
  offsetDate?: number // The date of the message starting from which the results should be fetched. Use 0 or any date in the future to get results from the last message
  offsetChatId?: number // The chat identifier of the last found message, or 0 for the first request
  offsetMessageId?: number // The message identifier of the last found message, or 0 for the first request
  limit?: number // The maximum number of messages to be returned, up to 100. Fewer messages may be returned than specified by the limit, even if the end of the message history has not been reached
}

/**
 * Searches for messages in all chats except secret chats. Returns the results in reverse
 * chronological order (i.e., in order of decreasing (date, chat_id, message_id)). For
 * optimal performance the number of returned messages is chosen by the library
 * @param {Object} params
 * @param {ChatListInputUnion} [params.chatList] - Chat list in which to search messages;
 * pass null to search in all chats regardless of their chat list
 * @param {string} [params.query] - Query to search for
 * @param {number} [params.offsetDate] - The date of the message starting from which
 * the results should be fetched. Use 0 or any date in the future to get results from
 * the last message
 * @param {number} [params.offsetChatId] - The chat identifier of the last found
 * message, or 0 for the first request
 * @param {number} [params.offsetMessageId] - The message identifier of the last
 * found message, or 0 for the first request
 * @param {number} [params.limit] - The maximum number of messages to be returned,
 * up to 100. Fewer messages may be returned than specified by the limit, even if the
 * end of the message history has not been reached
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchMessagesParams, MessagesUnion>>}
 */
export type searchMessages = (
  params?: SearchMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchMessagesParams, MessagesUnion>>
