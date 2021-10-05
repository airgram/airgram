import { ApiRequestOptions, ApiResponse } from '../airgram'
import {
  MessageSenderInputUnion,
  SearchMessagesFilterInputUnion
} from '../inputs'
import { MessagesUnion } from '../outputs'

export interface SearchChatMessagesParams {
  chatId?: number // Identifier of the chat in which to search messages
  query?: string // Query to search for
  sender?: MessageSenderInputUnion // Sender of messages to search for; pass null to search for messages from any sender. Not supported in secret chats
  fromMessageId?: number // Identifier of the message starting from which history must be fetched; use 0 to get results from the last message
  offset?: number // Specify 0 to get results from exactly the from_message_id or a negative offset to get the specified message and some newer messages
  limit?: number // The maximum number of messages to be returned; must be positive and can't be greater than 100. If the offset is negative, the limit must be greater than -offset. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit
  filter?: SearchMessagesFilterInputUnion // Additional filter for messages to search; pass null to search for all messages
  messageThreadId?: number // If not 0, only messages in the specified thread will be returned; supergroups only
}

/**
 * Searches for messages with given words in the chat. Returns the results in reverse
 * chronological order, i.e. in order of decreasing message_id. Cannot be used in secret
 * chats with a non-empty query (searchSecretMessages mmust be used instead), or without
 * an enabled message database. For optimal performance, the number of returned messages
 * is chosen by TDLib and can be smaller than the specified limit
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat in which to search messages
 * @param {string} [params.query] - Query to search for
 * @param {MessageSenderInputUnion} [params.sender] - Sender of messages to search
 * for; pass null to search for messages from any sender. Not supported in secret chats
 * @param {number} [params.fromMessageId] - Identifier of the message starting from
 * which history must be fetched; use 0 to get results from the last message
 * @param {number} [params.offset] - Specify 0 to get results from exactly the from_message_id
 * or a negative offset to get the specified message and some newer messages
 * @param {number} [params.limit] - The maximum number of messages to be returned;
 * must be positive and can't be greater than 100. If the offset is negative, the limit
 * must be greater than -offset. For optimal performance, the number of returned messages
 * is chosen by TDLib and can be smaller than the specified limit
 * @param {SearchMessagesFilterInputUnion} [params.filter] - Additional filter for
 * messages to search; pass null to search for all messages
 * @param {number} [params.messageThreadId] - If not 0, only messages in the specified
 * thread will be returned; supergroups only
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchChatMessagesParams, MessagesUnion>>}
 */
export type searchChatMessages = (
  params?: SearchChatMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchChatMessagesParams, MessagesUnion>>
