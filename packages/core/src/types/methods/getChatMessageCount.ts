import { ApiRequestOptions, ApiResponse } from '../airgram'
import { SearchMessagesFilterInputUnion } from '../inputs'
import { CountUnion } from '../outputs'

export interface GetChatMessageCountParams {
  chatId?: number // Identifier of the chat in which to count messages
  filter?: SearchMessagesFilterInputUnion // Filter for message content; searchMessagesFilterEmpty is unsupported in this function
  returnLocal?: boolean // If true, returns count that is available locally without sending network requests, returning -1 if the number of messages is unknown
}

/**
 * Returns approximate number of messages of the specified type in the chat
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat in which to count messages
 * @param {SearchMessagesFilterInputUnion} [params.filter] - Filter for message content;
 * searchMessagesFilterEmpty is unsupported in this function
 * @param {boolean} [params.returnLocal] - If true, returns count that is available
 * locally without sending network requests, returning -1 if the number of messages
 * is unknown
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatMessageCountParams, CountUnion>>}
 */
export type getChatMessageCount<ExtensionT> = (
  params?: GetChatMessageCountParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatMessageCountParams, CountUnion> & ExtensionT>
