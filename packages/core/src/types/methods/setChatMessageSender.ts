import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageSenderInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetChatMessageSenderParams {
  chatId?: number // Chat identifier
  messageSenderId?: MessageSenderInputUnion // New message sender for the chat
}

/**
 * Selects a message sender to send messages in a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {MessageSenderInputUnion} [params.messageSenderId] - New message sender
 * for the chat
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatMessageSenderParams, OkUnion>>}
 */
export type setChatMessageSender = (
  params?: SetChatMessageSenderParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetChatMessageSenderParams, OkUnion>>
