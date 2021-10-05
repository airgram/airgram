import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface PinChatMessageParams {
  chatId?: number // Identifier of the chat
  messageId?: number // Identifier of the new pinned message
  disableNotification?: boolean // True, if there must be no notification about the pinned message. Notifications are always disabled in channels and private chats
  onlyForSelf?: boolean // True, if the message needs to be pinned for one side only; private chats only
}

/**
 * Pins a message in a chat; requires can_pin_messages rights or can_edit_messages rights
 * in the channel
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat
 * @param {number} [params.messageId] - Identifier of the new pinned message
 * @param {boolean} [params.disableNotification] - True, if there must be no notification
 * about the pinned message. Notifications are always disabled in channels and private
 * chats
 * @param {boolean} [params.onlyForSelf] - True, if the message needs to be pinned
 * for one side only; private chats only
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<PinChatMessageParams, OkUnion>>}
 */
export type pinChatMessage = (
  params?: PinChatMessageParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<PinChatMessageParams, OkUnion>>
