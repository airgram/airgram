import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatJoinRequestInput } from '../inputs'
import { ChatJoinRequestsUnion } from '../outputs'

export interface GetChatJoinRequestsParams {
  chatId?: number // Chat identifier
  inviteLink?: string // Invite link for which to return join requests. If empty, all join requests will be returned. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links
  query?: string // A query to search for in the first names, last names and usernames of the users to return
  offsetRequest?: ChatJoinRequestInput // A chat join request from which to return next requests; pass null to get results from the beginning
  limit?: number // The maximum number of requests to join the chat to return
}

/**
 * Returns pending join requests in a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {string} [params.inviteLink] - Invite link for which to return join requests.
 * If empty, all join requests will be returned. Requires administrator privileges and
 * can_invite_users right in the chat for own links and owner privileges for other links
 * @param {string} [params.query] - A query to search for in the first names, last
 * names and usernames of the users to return
 * @param {ChatJoinRequestInput} [params.offsetRequest] - A chat join request from
 * which to return next requests; pass null to get results from the beginning
 * @param {number} [params.limit] - The maximum number of requests to join the chat
 * to return
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatJoinRequestsParams, ChatJoinRequestsUnion>>}
 */
export type getChatJoinRequests = (
  params?: GetChatJoinRequestsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatJoinRequestsParams, ChatJoinRequestsUnion>>
