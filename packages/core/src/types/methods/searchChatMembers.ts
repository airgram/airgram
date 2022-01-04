import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatMembersFilterInputUnion } from '../inputs'
import { ChatMembersUnion } from '../outputs'

export interface SearchChatMembersParams {
  chatId?: number // Chat identifier
  query?: string // Query to search for
  limit?: number // The maximum number of users to be returned; up to 200
  filter?: ChatMembersFilterInputUnion // The type of users to search for; pass null to search among all chat members
}

/**
 * Searches for a specified query in the first name, last name and username of the members
 * of a specified chat. Requires administrator rights in channels
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {string} [params.query] - Query to search for
 * @param {number} [params.limit] - The maximum number of users to be returned; up
 * to 200
 * @param {ChatMembersFilterInputUnion} [params.filter] - The type of users to search
 * for; pass null to search among all chat members
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchChatMembersParams, ChatMembersUnion>>}
 */
export type searchChatMembers = (
  params?: SearchChatMembersParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchChatMembersParams, ChatMembersUnion>>
