import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatAdministratorsUnion } from '../outputs'

export interface GetChatAdministratorsParams {
  chatId?: number // Chat identifier
}

/**
 * Returns a list of administrators of the chat with their custom titles
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatAdministratorsParams, ChatAdministratorsUnion>>}
 */
export type getChatAdministrators = (
  params?: GetChatAdministratorsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatAdministratorsParams, ChatAdministratorsUnion>>
