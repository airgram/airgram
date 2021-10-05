import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatInviteLinksUnion } from '../outputs'

export interface GetChatInviteLinksParams {
  chatId?: number // Chat identifier
  creatorUserId?: number // User identifier of a chat administrator. Must be an identifier of the current user for non-owner
  isRevoked?: boolean // Pass true if revoked links needs to be returned instead of active or expired
  offsetDate?: number // Creation date of an invite link starting after which to return invite links; use 0 to get results from the beginning
  offsetInviteLink?: string // Invite link starting after which to return invite links; use empty string to get results from the beginning
  limit?: number // The maximum number of invite links to return
}

/**
 * Returns invite links for a chat created by specified administrator. Requires administrator
 * privileges and can_invite_users right in the chat to get own links and owner privileges
 * to get other links
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.creatorUserId] - User identifier of a chat administrator.
 * Must be an identifier of the current user for non-owner
 * @param {boolean} [params.isRevoked] - Pass true if revoked links needs to be returned
 * instead of active or expired
 * @param {number} [params.offsetDate] - Creation date of an invite link starting
 * after which to return invite links; use 0 to get results from the beginning
 * @param {string} [params.offsetInviteLink] - Invite link starting after which to
 * return invite links; use empty string to get results from the beginning
 * @param {number} [params.limit] - The maximum number of invite links to return
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatInviteLinksParams, ChatInviteLinksUnion>>}
 */
export type getChatInviteLinks = (
  params?: GetChatInviteLinksParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatInviteLinksParams, ChatInviteLinksUnion>>
