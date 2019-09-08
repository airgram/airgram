import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface AddChatMemberParams {
  chatId?: number // Chat identifier
  userId?: number // Identifier of the user
  forwardLimit?: number // The number of earlier messages from the chat to be forwarded to the new member; up to 100. Ignored for supergroups and channels
}

/**
 * Adds a new member to a chat. Members can't be added to private or secret chats. Members
 * will not be added until the chat state has been synchronized with the server
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.userId] - Identifier of the user
 * @param {number} [params.forwardLimit] - The number of earlier messages from the
 * chat to be forwarded to the new member; up to 100. Ignored for supergroups and channels
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AddChatMemberParams, OkUnion>>}
 */
export type addChatMember<ExtensionT> = (
  params?: AddChatMemberParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<AddChatMemberParams, OkUnion> & ExtensionT>
