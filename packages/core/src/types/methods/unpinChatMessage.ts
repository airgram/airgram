import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface UnpinChatMessageParams {
  chatId?: number // Identifier of the chat
}

/**
 * Removes the pinned message from a chat; requires can_pin_messages rights in the group
 * or channel
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<UnpinChatMessageParams, OkUnion>>}
 */
export type unpinChatMessage<ExtensionT> = (
  params?: UnpinChatMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<UnpinChatMessageParams, OkUnion> & ExtensionT>
