import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface PinChatMessageParams {
  chatId?: number // Identifier of the chat
  messageId?: number // Identifier of the new pinned message
  disableNotification?: boolean // Pass true to disable notification about the pinned message. Notifications are always disabled in channels and private chats
  onlyForSelf?: boolean // Pass true to pin the message only for self; private chats only
}

/**
 * Pins a message in a chat; requires can_pin_messages rights or can_edit_messages rights
 * in the channel
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat
 * @param {number} [params.messageId] - Identifier of the new pinned message
 * @param {boolean} [params.disableNotification] - Pass true to disable notification
 * about the pinned message. Notifications are always disabled in channels and private
 * chats
 * @param {boolean} [params.onlyForSelf] - Pass true to pin the message only for
 * self; private chats only
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<PinChatMessageParams, OkUnion>>}
 */
export type pinChatMessage = (
  params?: PinChatMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<PinChatMessageParams, OkUnion>>
