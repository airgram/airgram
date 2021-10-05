import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatInviteLinksUnion } from '../outputs'

export interface RevokeChatInviteLinkParams {
  chatId?: number // Chat identifier
  inviteLink?: string // Invite link to be revoked
}

/**
 * Revokes invite link for a chat. Available for basic groups, supergroups, and channels.
 * Requires administrator privileges and can_invite_users right in the chat for own
 * links and owner privileges for other links. If a primary link is revoked, then additionally
 * to the revoked link returns new primary link
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {string} [params.inviteLink] - Invite link to be revoked
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RevokeChatInviteLinkParams, ChatInviteLinksUnion>>}
 */
export type revokeChatInviteLink = (
  params?: RevokeChatInviteLinkParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<RevokeChatInviteLinkParams, ChatInviteLinksUnion>>
