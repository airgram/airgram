import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatInviteLinkUnion } from '../outputs'

export interface EditChatInviteLinkParams {
  chatId?: number // Chat identifier
  inviteLink?: string // Invite link to be edited
  expireDate?: number // Point in time (Unix timestamp) when the link will expire; pass 0 if never
  memberLimit?: number // The maximum number of chat members that can join the chat by the link simultaneously; 0-99999; pass 0 if not limited
}

/**
 * Edits a non-primary invite link for a chat. Available for basic groups, supergroups,
 * and channels. Requires administrator privileges and can_invite_users right in the
 * chat for own links and owner privileges for other links
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {string} [params.inviteLink] - Invite link to be edited
 * @param {number} [params.expireDate] - Point in time (Unix timestamp) when the
 * link will expire; pass 0 if never
 * @param {number} [params.memberLimit] - The maximum number of chat members that
 * can join the chat by the link simultaneously; 0-99999; pass 0 if not limited
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EditChatInviteLinkParams, ChatInviteLinkUnion>>}
 */
export type editChatInviteLink = (
  params?: EditChatInviteLinkParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<EditChatInviteLinkParams, ChatInviteLinkUnion>>
