import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageThreadInfoUnion } from '../outputs'

export interface GetMessageThreadParams {
  chatId?: number // Chat identifier
  messageId?: number // Identifier of the message
}

/**
 * Returns information about a message thread. Can be used only if message.can_get_message_thread
 * == true
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.messageId] - Identifier of the message
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMessageThreadParams, MessageThreadInfoUnion>>}
 */
export type getMessageThread = (
  params?: GetMessageThreadParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetMessageThreadParams, MessageThreadInfoUnion>>
