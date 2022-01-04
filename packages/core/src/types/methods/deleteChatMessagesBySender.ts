import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageSenderInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface DeleteChatMessagesBySenderParams {
  chatId?: number // Chat identifier
  senderId?: MessageSenderInputUnion // Identifier of the sender of messages to delete
}

/**
 * Deletes all messages sent by the specified message sender in a chat. Supported only
 * for supergroups; requires can_delete_messages administrator privileges
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {MessageSenderInputUnion} [params.senderId] - Identifier of the sender
 * of messages to delete
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DeleteChatMessagesBySenderParams, OkUnion>>}
 */
export type deleteChatMessagesBySender = (
  params?: DeleteChatMessagesBySenderParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<DeleteChatMessagesBySenderParams, OkUnion>>
