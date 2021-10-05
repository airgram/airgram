import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface DeleteChatParams {
  chatId?: number // Chat identifier
}

/**
 * Deletes a chat along with all messages in the corresponding chat for all chat members;
 * requires owner privileges. For group chats this will release the username and remove
 * all members. Chats with more than 1000 members can't be deleted using this method
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DeleteChatParams, OkUnion>>}
 */
export type deleteChat = (
  params?: DeleteChatParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<DeleteChatParams, OkUnion>>
