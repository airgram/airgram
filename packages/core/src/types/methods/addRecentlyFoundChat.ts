import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface AddRecentlyFoundChatParams {
  chatId?: number // Identifier of the chat to add
}

/**
 * Adds a chat to the list of recently found chats. The chat is added to the beginning
 * of the list. If the chat is already in the list, it will be removed from the list
 * first
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to add
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AddRecentlyFoundChatParams, OkUnion>>}
 */
export type addRecentlyFoundChat = (
  params?: AddRecentlyFoundChatParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<AddRecentlyFoundChatParams, OkUnion>>
