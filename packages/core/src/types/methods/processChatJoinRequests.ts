import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ProcessChatJoinRequestsParams {
  chatId?: number // Chat identifier
  inviteLink?: string // Invite link for which to process join requests. If empty, all join requests will be processed. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links
  approve?: boolean // True, if the requests are approved. Otherwise the requests are declived
}

/**
 * Handles all pending join requests for a given link in a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {string} [params.inviteLink] - Invite link for which to process join requests.
 * If empty, all join requests will be processed. Requires administrator privileges
 * and can_invite_users right in the chat for own links and owner privileges for other
 * links
 * @param {boolean} [params.approve] - True, if the requests are approved. Otherwise
 * the requests are declived
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ProcessChatJoinRequestsParams, OkUnion>>}
 */
export type processChatJoinRequests = (
  params?: ProcessChatJoinRequestsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ProcessChatJoinRequestsParams, OkUnion>>
