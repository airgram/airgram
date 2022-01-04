import { ApiRequestOptions, ApiResponse } from '../airgram'
import { SearchMessagesFilterInputUnion } from '../inputs'
import { MessageCalendarUnion } from '../outputs'

export interface GetChatMessageCalendarParams {
  chatId?: number // Identifier of the chat in which to return information about messages
  filter?: SearchMessagesFilterInputUnion // Filter for message content. Filters searchMessagesFilterEmpty, searchMessagesFilterMention and searchMessagesFilterUnreadMention are unsupported in this function
  fromMessageId?: number // The message identifier from which to return information about messages; use 0 to get results from the last message
}

/**
 * Returns information about the next messages of the specified type in the chat split
 * by days. Returns the results in reverse chronological order. Can return partial result
 * for the last returned day. Behavior of this method depends on the value of the option
 * "utc_time_offset"
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat in which to return information
 * about messages
 * @param {SearchMessagesFilterInputUnion} [params.filter] - Filter for message content.
 * Filters searchMessagesFilterEmpty, searchMessagesFilterMention and searchMessagesFilterUnreadMention
 * are unsupported in this function
 * @param {number} [params.fromMessageId] - The message identifier from which to
 * return information about messages; use 0 to get results from the last message
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatMessageCalendarParams, MessageCalendarUnion>>}
 */
export type getChatMessageCalendar = (
  params?: GetChatMessageCalendarParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatMessageCalendarParams, MessageCalendarUnion>>
