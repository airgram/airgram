import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface DeleteMessagesParams {
  chatId?: number // Chat identifier
  messageIds?: number[] // Identifiers of the messages to be deleted
  revoke?: boolean // Pass true to try to delete messages for all chat members. Always true for supergroups, channels and secret chats
}

/**
 * Deletes messages
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number[]} [params.messageIds] - Identifiers of the messages to be deleted
 * @param {boolean} [params.revoke] - Pass true to try to delete messages for all
 * chat members. Always true for supergroups, channels and secret chats
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DeleteMessagesParams, OkUnion>>}
 */
export type deleteMessages = (
  params?: DeleteMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<DeleteMessagesParams, OkUnion>>
