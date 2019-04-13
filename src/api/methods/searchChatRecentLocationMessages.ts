import { MessagesUnion } from '../outputs'

/**
 * Returns information about the recent locations of chat members that were sent to
 * the chat. Returns up to 1 location message per user
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.limit] - Maximum number of messages to be returned
 * @param {Object} state
 * @returns {MessagesUnion}
 */
export type SearchChatRecentLocationMessagesMethod = <ResponseT = MessagesUnion>(
  params: SearchChatRecentLocationMessagesParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SearchChatRecentLocationMessagesParams {
  /** Chat identifier */
  chatId?: number
  /** Maximum number of messages to be returned */
  limit?: number
}
