import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface TransferChatOwnershipParams {
  chatId?: number // Chat identifier
  userId?: number // Identifier of the user to which transfer the ownership. The ownership can't be transferred to a bot or to a deleted user
  password?: string // The password of the current user
}

/**
 * Changes the owner of a chat. The current user must be a current owner of the chat.
 * Use the method canTransferOwnership to check whether the ownership can be transferred
 * from the current session. Available only for supergroups and channel chats
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.userId] - Identifier of the user to which transfer the
 * ownership. The ownership can't be transferred to a bot or to a deleted user
 * @param {string} [params.password] - The password of the current user
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<TransferChatOwnershipParams, OkUnion>>}
 */
export type transferChatOwnership = (
  params?: TransferChatOwnershipParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<TransferChatOwnershipParams, OkUnion>>
