import { ApiRequestOptions, ApiResponse } from '../airgram'
import { UsersUnion } from '../outputs'

export interface GetChatAdministratorsParams {
  chatId?: number // Chat identifier
}

/**
 * Returns a list of users who are administrators of the chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatAdministratorsParams, UsersUnion>>}
 */
export type getChatAdministrators = (
  params?: GetChatAdministratorsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatAdministratorsParams, UsersUnion>>
