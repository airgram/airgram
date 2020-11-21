import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface UnpinAllChatMessagesParams {
  chatId?: number // Identifier of the chat
}

/**
 * Removes all pinned messages from a chat; requires can_pin_messages rights in the
 * group or can_edit_messages rights in the channel
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<UnpinAllChatMessagesParams, OkUnion>>}
 */
export type unpinAllChatMessages = (
  params?: UnpinAllChatMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<UnpinAllChatMessagesParams, OkUnion>>
