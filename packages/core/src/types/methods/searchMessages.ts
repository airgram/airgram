import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatListInputUnion, SearchMessagesFilterInputUnion } from '../inputs'
import { MessagesUnion } from '../outputs'

export interface SearchMessagesParams {
  chatList?: ChatListInputUnion // Chat list in which to search messages; pass null to search in all chats regardless of their chat list. Only Main and Archive chat lists are supported
  query?: string // Query to search for
  offsetDate?: number // The date of the message starting from which the results need to be fetched. Use 0 or any date in the future to get results from the last message
  offsetChatId?: number // The chat identifier of the last found message, or 0 for the first request
  offsetMessageId?: number // The message identifier of the last found message, or 0 for the first request
  limit?: number // The maximum number of messages to be returned; up to 100. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit
  filter?: SearchMessagesFilterInputUnion // Additional filter for messages to search; pass null to search for all messages. Filters searchMessagesFilterMention, searchMessagesFilterUnreadMention, searchMessagesFilterUnreadReaction, searchMessagesFilterFailedToSend, and searchMessagesFilterPinned are unsupported in this function
  minDate?: number // If not 0, the minimum date of the messages to return
  maxDate?: number // If not 0, the maximum date of the messages to return
}

/**
 * Searches for messages in all chats except secret chats. Returns the results in reverse
 * chronological order (i.e., in order of decreasing (date, chat_id, message_id)). For
 * optimal performance, the number of returned messages is chosen by TDLib and can be
 * smaller than the specified limit
 * @param {Object} params
 * @param {ChatListInputUnion} [params.chatList] - Chat list in which to search messages;
 * pass null to search in all chats regardless of their chat list. Only Main and Archive
 * chat lists are supported
 * @param {string} [params.query] - Query to search for
 * @param {number} [params.offsetDate] - The date of the message starting from which
 * the results need to be fetched. Use 0 or any date in the future to get results from
 * the last message
 * @param {number} [params.offsetChatId] - The chat identifier of the last found
 * message, or 0 for the first request
 * @param {number} [params.offsetMessageId] - The message identifier of the last
 * found message, or 0 for the first request
 * @param {number} [params.limit] - The maximum number of messages to be returned;
 * up to 100. For optimal performance, the number of returned messages is chosen by
 * TDLib and can be smaller than the specified limit
 * @param {SearchMessagesFilterInputUnion} [params.filter] - Additional filter for
 * messages to search; pass null to search for all messages. Filters searchMessagesFilterMention,
 * searchMessagesFilterUnreadMention, searchMessagesFilterUnreadReaction, searchMessagesFilterFailedToSend,
 * and searchMessagesFilterPinned are unsupported in this function
 * @param {number} [params.minDate] - If not 0, the minimum date of the messages
 * to return
 * @param {number} [params.maxDate] - If not 0, the maximum date of the messages
 * to return
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchMessagesParams, MessagesUnion>>}
 */
export type searchMessages = (
  params?: SearchMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchMessagesParams, MessagesUnion>>
