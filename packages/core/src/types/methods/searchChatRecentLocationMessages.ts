import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessagesUnion } from '../outputs'

export interface SearchChatRecentLocationMessagesParams {
  chatId?: number // Chat identifier
  limit?: number // Maximum number of messages to be returned
}

/**
 * Returns information about the recent locations of chat members that were sent to
 * the chat. Returns up to 1 location message per user
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.limit] - Maximum number of messages to be returned
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchChatRecentLocationMessagesParams, MessagesUnion>>}
 */
export type searchChatRecentLocationMessages = (
  params?: SearchChatRecentLocationMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchChatRecentLocationMessagesParams, MessagesUnion>>
