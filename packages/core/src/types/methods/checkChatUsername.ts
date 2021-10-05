import { ApiRequestOptions, ApiResponse } from '../airgram'
import { CheckChatUsernameResultUnion } from '../outputs'

export interface CheckChatUsernameParams {
  chatId?: number // Chat identifier; must be identifier of a supergroup chat, or a channel chat, or a private chat with self, or zero if the chat is being created
  username?: string // Username to be checked
}

/**
 * Checks whether a username can be set for a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier; must be identifier of a supergroup
 * chat, or a channel chat, or a private chat with self, or zero if the chat is being
 * created
 * @param {string} [params.username] - Username to be checked
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CheckChatUsernameParams, CheckChatUsernameResultUnion>>}
 */
export type checkChatUsername = (
  params?: CheckChatUsernameParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CheckChatUsernameParams, CheckChatUsernameResultUnion>>
