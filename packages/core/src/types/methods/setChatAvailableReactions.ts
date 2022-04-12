import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetChatAvailableReactionsParams {
  chatId?: number // Identifier of the chat
  availableReactions?: string[] // New list of reactions, available in the chat. All reactions must be active
}

/**
 * Changes reactions, available in a chat. Available for basic groups, supergroups,
 * and channels. Requires can_change_info administrator right
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat
 * @param {string[]} [params.availableReactions] - New list of reactions, available
 * in the chat. All reactions must be active
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatAvailableReactionsParams, OkUnion>>}
 */
export type setChatAvailableReactions = (
  params?: SetChatAvailableReactionsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetChatAvailableReactionsParams, OkUnion>>
