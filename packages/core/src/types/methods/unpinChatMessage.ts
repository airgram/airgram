import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface UnpinChatMessageParams {
  chatId?: number // Identifier of the chat
  messageId?: number // Identifier of the removed pinned message
}

/**
 * Removes a pinned message from a chat; requires can_pin_messages rights in the group
 * or can_edit_messages rights in the channel
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat
 * @param {number} [params.messageId] - Identifier of the removed pinned message
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<UnpinChatMessageParams, OkUnion>>}
 */
export type unpinChatMessage = (
  params?: UnpinChatMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<UnpinChatMessageParams, OkUnion>>
