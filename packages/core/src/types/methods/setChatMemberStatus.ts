import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatMemberStatusInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetChatMemberStatusParams {
  chatId?: number // Chat identifier
  userId?: number // User identifier
  status?: ChatMemberStatusInputUnion // The new status of the member in the chat
}

/**
 * Changes the status of a chat member, needs appropriate privileges. This function
 * is currently not suitable for adding new members to the chat; instead, use addChatMember.
 * The chat member status will not be changed until it has been synchronized with the
 * server
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.userId] - User identifier
 * @param {ChatMemberStatusInputUnion} [params.status] - The new status of the member
 * in the chat
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatMemberStatusParams, OkUnion>>}
 */
export type setChatMemberStatus = (
  params?: SetChatMemberStatusParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetChatMemberStatusParams, OkUnion>>
