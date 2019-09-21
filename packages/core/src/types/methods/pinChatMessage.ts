import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface PinChatMessageParams {
  chatId?: number // Identifier of the chat
  messageId?: number // Identifier of the new pinned message
  disableNotification?: boolean // True, if there should be no notification about the pinned message
}

/**
 * Pins a message in a chat; requires can_pin_messages rights
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat
 * @param {number} [params.messageId] - Identifier of the new pinned message
 * @param {boolean} [params.disableNotification] - True, if there should be no notification
 * about the pinned message
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<PinChatMessageParams, OkUnion>>}
 */
export type pinChatMessage = (
  params?: PinChatMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<PinChatMessageParams, OkUnion>>
