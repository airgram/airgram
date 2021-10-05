import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface AddChatMemberParams {
  chatId?: number // Chat identifier
  userId?: number // Identifier of the user
  forwardLimit?: number // The number of earlier messages from the chat to be forwarded to the new member; up to 100. Ignored for supergroups and channels, or if the added user is a bot
}

/**
 * Adds a new member to a chat. Members can't be added to private or secret chats
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.userId] - Identifier of the user
 * @param {number} [params.forwardLimit] - The number of earlier messages from the
 * chat to be forwarded to the new member; up to 100. Ignored for supergroups and channels,
 * or if the added user is a bot
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AddChatMemberParams, OkUnion>>}
 */
export type addChatMember = (
  params?: AddChatMemberParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<AddChatMemberParams, OkUnion>>
