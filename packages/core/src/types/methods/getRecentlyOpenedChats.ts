import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatsUnion } from '../outputs'

export interface GetRecentlyOpenedChatsParams {
  limit?: number // The maximum number of chats to be returned
}

/**
 * Returns recently opened chats, this is an offline request. Returns chats in the order
 * of last opening
 * @param {Object} params
 * @param {number} [params.limit] - The maximum number of chats to be returned
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetRecentlyOpenedChatsParams, ChatsUnion>>}
 */
export type getRecentlyOpenedChats = (
  params?: GetRecentlyOpenedChatsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetRecentlyOpenedChatsParams, ChatsUnion>>
