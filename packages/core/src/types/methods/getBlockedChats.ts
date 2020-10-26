import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatsUnion } from '../outputs'

export interface GetBlockedChatsParams {
  offset?: number // Number of chats to skip in the result; must be non-negative
  limit?: number // The maximum number of chats to return; up to 100
}

/**
 * Returns chats that were blocked by the current user
 * @param {Object} params
 * @param {number} [params.offset] - Number of chats to skip in the result; must
 * be non-negative
 * @param {number} [params.limit] - The maximum number of chats to return; up to
 * 100
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetBlockedChatsParams, ChatsUnion>>}
 */
export type getBlockedChats = (
  params?: GetBlockedChatsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetBlockedChatsParams, ChatsUnion>>
