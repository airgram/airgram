import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface LeaveChatParams {
  chatId?: number // Chat identifier
}

/**
 * Removes the current user from chat members. Private and secret chats can't be left
 * using this method
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<LeaveChatParams, OkUnion>>}
 */
export type leaveChat = (
  params?: LeaveChatParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<LeaveChatParams, OkUnion>>
