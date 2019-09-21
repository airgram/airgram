import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatsUnion } from '../outputs'

export interface GetGroupsInCommonParams {
  userId?: number // User identifier
  offsetChatId?: number // Chat identifier starting from which to return chats; use 0 for the first request
  limit?: number // Maximum number of chats to be returned; up to 100
}

/**
 * Returns a list of common group chats with a given user. Chats are sorted by their
 * type and creation date
 * @param {Object} params
 * @param {number} [params.userId] - User identifier
 * @param {number} [params.offsetChatId] - Chat identifier starting from which to
 * return chats; use 0 for the first request
 * @param {number} [params.limit] - Maximum number of chats to be returned; up to
 * 100
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetGroupsInCommonParams, ChatsUnion>>}
 */
export type getGroupsInCommon = (
  params?: GetGroupsInCommonParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetGroupsInCommonParams, ChatsUnion>>
