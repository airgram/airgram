import { ApiRequestOptions, ApiResponse } from '../airgram'
import { SearchMessagesFilterInputUnion } from '../inputs'
import { CountUnion } from '../outputs'

export interface GetChatMessageCountParams {
  chatId?: number // Identifier of the chat in which to count messages
  filter?: SearchMessagesFilterInputUnion // Filter for message content; searchMessagesFilterEmpty is unsupported in this function
  returnLocal?: boolean // Pass true to get the number of messages without sending network requests, or -1 if the number of messages is unknown locally
}

/**
 * Returns approximate number of messages of the specified type in the chat
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat in which to count messages
 * @param {SearchMessagesFilterInputUnion} [params.filter] - Filter for message content;
 * searchMessagesFilterEmpty is unsupported in this function
 * @param {boolean} [params.returnLocal] - Pass true to get the number of messages
 * without sending network requests, or -1 if the number of messages is unknown locally
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatMessageCountParams, CountUnion>>}
 */
export type getChatMessageCount = (
  params?: GetChatMessageCountParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatMessageCountParams, CountUnion>>
