import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface DeleteChatMessagesByDateParams {
  chatId?: number // Chat identifier
  minDate?: number // The minimum date of the messages to delete
  maxDate?: number // The maximum date of the messages to delete
  revoke?: boolean // Pass true to delete chat messages for all users; private chats only
}

/**
 * Deletes all messages between the specified dates in a chat. Supported only for private
 * chats and basic groups. Messages sent in the last 30 seconds will not be deleted
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.minDate] - The minimum date of the messages to delete
 * @param {number} [params.maxDate] - The maximum date of the messages to delete
 * @param {boolean} [params.revoke] - Pass true to delete chat messages for all users;
 * private chats only
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DeleteChatMessagesByDateParams, OkUnion>>}
 */
export type deleteChatMessagesByDate = (
  params?: DeleteChatMessagesByDateParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<DeleteChatMessagesByDateParams, OkUnion>>
