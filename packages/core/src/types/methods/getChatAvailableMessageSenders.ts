import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageSendersUnion } from '../outputs'

export interface GetChatAvailableMessageSendersParams {
  chatId?: number // Chat identifier
}

/**
 * Returns list of message sender identifiers, which can be used to send messages in
 * a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatAvailableMessageSendersParams, MessageSendersUnion>>}
 */
export type getChatAvailableMessageSenders = (
  params?: GetChatAvailableMessageSendersParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatAvailableMessageSendersParams, MessageSendersUnion>>
