import { ApiRequestOptions, ApiResponse } from '../airgram'
import { UsersUnion } from '../outputs'

export interface GetMessageViewersParams {
  chatId?: number // Chat identifier
  messageId?: number // Identifier of the message
}

/**
 * Returns viewers of a recent outgoing message in a basic group or a supergroup chat.
 * For video notes and voice notes only users, opened content of the message, are returned.
 * The method can be called if message.can_get_viewers == true
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.messageId] - Identifier of the message
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetMessageViewersParams, UsersUnion>>}
 */
export type getMessageViewers = (
  params?: GetMessageViewersParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetMessageViewersParams, UsersUnion>>
