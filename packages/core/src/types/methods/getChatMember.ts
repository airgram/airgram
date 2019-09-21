import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatMemberUnion } from '../outputs'

export interface GetChatMemberParams {
  chatId?: number // Chat identifier
  userId?: number // User identifier
}

/**
 * Returns information about a single member of a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.userId] - User identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatMemberParams, ChatMemberUnion>>}
 */
export type getChatMember = (
  params?: GetChatMemberParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatMemberParams, ChatMemberUnion>>
