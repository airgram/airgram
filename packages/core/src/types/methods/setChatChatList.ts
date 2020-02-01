import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatListInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetChatChatListParams {
  chatId?: number // Chat identifier
  chatList?: ChatListInputUnion // New chat list of the chat
}

/**
 * Moves a chat to a different chat list. Current chat list of the chat must ne non-null
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ChatListInputUnion} [params.chatList] - New chat list of the chat
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatChatListParams, OkUnion>>}
 */
export type setChatChatList = (
  params?: SetChatChatListParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetChatChatListParams, OkUnion>>
