import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatListsUnion } from '../outputs'

export interface GetChatListsToAddChatParams {
  chatId?: number // Chat identifier
}

/**
 * Returns chat lists to which the chat can be added. This is an offline request
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatListsToAddChatParams, ChatListsUnion>>}
 */
export type getChatListsToAddChat = (
  params?: GetChatListsToAddChatParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatListsToAddChatParams, ChatListsUnion>>
