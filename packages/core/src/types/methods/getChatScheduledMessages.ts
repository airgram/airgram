import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessagesUnion } from '../outputs'

export interface GetChatScheduledMessagesParams {
  chatId?: number // Chat identifier
}

/**
 * Returns all scheduled messages in a chat. The messages are returned in a reverse
 * chronological order (i.e., in order of decreasing message_id)
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatScheduledMessagesParams, MessagesUnion>>}
 */
export type getChatScheduledMessages = (
  params?: GetChatScheduledMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatScheduledMessagesParams, MessagesUnion>>
