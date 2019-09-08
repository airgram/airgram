import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface DeleteChatHistoryParams {
  chatId?: number // Chat identifier
  removeFromChatList?: boolean // Pass true if the chat should be removed from the chat list
  revoke?: boolean // Pass true to try to delete chat history for all users
}

/**
 * Deletes all messages in the chat. Use Chat.can_be_deleted_only_for_self and Chat.can_be_deleted_for_all_users
 * fields to find whether and how the method can be applied to the chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {boolean} [params.removeFromChatList] - Pass true if the chat should be
 * removed from the chat list
 * @param {boolean} [params.revoke] - Pass true to try to delete chat history for
 * all users
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DeleteChatHistoryParams, OkUnion>>}
 */
export type deleteChatHistory<ExtensionT> = (
  params?: DeleteChatHistoryParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<DeleteChatHistoryParams, OkUnion> & ExtensionT>
