import { ApiRequestOptions, ApiResponse } from '../airgram'
import { SearchMessagesFilterInputUnion } from '../inputs'
import { MessagePositionsUnion } from '../outputs'

export interface GetChatSparseMessagePositionsParams {
  chatId?: number // Identifier of the chat in which to return information about message positions
  filter?: SearchMessagesFilterInputUnion // Filter for message content. Filters searchMessagesFilterEmpty, searchMessagesFilterMention and searchMessagesFilterUnreadMention are unsupported in this function
  fromMessageId?: number // The message identifier from which to return information about message positions
  limit?: number // The expected number of message positions to be returned; 50-2000. A smaller number of positions can be returned, if there are not enough appropriate messages
}

/**
 * Returns sparse positions of messages of the specified type in the chat to be used
 * for shared media scroll implementation. Returns the results in reverse chronological
 * order (i.e., in order of decreasing message_id). Cannot be used in secret chats or
 * with searchMessagesFilterFailedToSend filter without an enabled message database
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat in which to return information
 * about message positions
 * @param {SearchMessagesFilterInputUnion} [params.filter] - Filter for message content.
 * Filters searchMessagesFilterEmpty, searchMessagesFilterMention and searchMessagesFilterUnreadMention
 * are unsupported in this function
 * @param {number} [params.fromMessageId] - The message identifier from which to
 * return information about message positions
 * @param {number} [params.limit] - The expected number of message positions to be
 * returned; 50-2000. A smaller number of positions can be returned, if there are not
 * enough appropriate messages
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatSparseMessagePositionsParams, MessagePositionsUnion>>}
 */
export type getChatSparseMessagePositions = (
  params?: GetChatSparseMessagePositionsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatSparseMessagePositionsParams, MessagePositionsUnion>>
