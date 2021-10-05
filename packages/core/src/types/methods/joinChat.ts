import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface JoinChatParams {
  chatId?: number // Chat identifier
}

/**
 * Adds the current user as a new member to a chat. Private and secret chats can't be
 * joined using this method
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<JoinChatParams, OkUnion>>}
 */
export type joinChat = (
  params?: JoinChatParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<JoinChatParams, OkUnion>>
