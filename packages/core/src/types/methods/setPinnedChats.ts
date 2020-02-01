import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatListInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetPinnedChatsParams {
  chatList?: ChatListInputUnion // Chat list in which to change the order of pinned chats
  chatIds?: number[] // The new list of pinned chats
}

/**
 * Changes the order of pinned chats
 * @param {Object} params
 * @param {ChatListInputUnion} [params.chatList] - Chat list in which to change the
 * order of pinned chats
 * @param {number[]} [params.chatIds] - The new list of pinned chats
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetPinnedChatsParams, OkUnion>>}
 */
export type setPinnedChats = (
  params?: SetPinnedChatsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetPinnedChatsParams, OkUnion>>
