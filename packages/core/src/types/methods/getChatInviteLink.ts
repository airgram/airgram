import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatInviteLinkUnion } from '../outputs'

export interface GetChatInviteLinkParams {
  chatId?: number // Chat identifier
  inviteLink?: string // Invite link to get
}

/**
 * Returns information about an invite link. Requires administrator privileges and can_invite_users
 * right in the chat to get own links and owner privileges to get other links
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {string} [params.inviteLink] - Invite link to get
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetChatInviteLinkParams, ChatInviteLinkUnion>>}
 */
export type getChatInviteLink = (
  params?: GetChatInviteLinkParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetChatInviteLinkParams, ChatInviteLinkUnion>>
