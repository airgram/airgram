import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface RemoveRecentlyFoundChatParams {
  chatId?: number // Identifier of the chat to be removed
}

/**
 * Removes a chat from the list of recently found chats
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to be removed
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RemoveRecentlyFoundChatParams, OkUnion>>}
 */
export type removeRecentlyFoundChat<ExtensionT> = (
  params?: RemoveRecentlyFoundChatParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<RemoveRecentlyFoundChatParams, OkUnion> & ExtensionT>
