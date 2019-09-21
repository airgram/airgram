import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageUnion } from '../outputs'

export interface GetChatPinnedMessageParams {
  chatId?: number // Identifier of the chat the message belongs to
}

/**
 * Returns information about a pinned chat message
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat the message belongs to
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatPinnedMessageParams, MessageUnion>>}
 */
export type getChatPinnedMessage = (
  params?: GetChatPinnedMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatPinnedMessageParams, MessageUnion>>
