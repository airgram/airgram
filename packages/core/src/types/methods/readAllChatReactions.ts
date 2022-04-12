import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ReadAllChatReactionsParams {
  chatId?: number // Chat identifier
}

/**
 * Marks all reactions in a chat as read
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ReadAllChatReactionsParams, OkUnion>>}
 */
export type readAllChatReactions = (
  params?: ReadAllChatReactionsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ReadAllChatReactionsParams, OkUnion>>
