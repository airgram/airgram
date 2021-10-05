import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface DeleteRevokedChatInviteLinkParams {
  chatId?: number // Chat identifier
  inviteLink?: string // Invite link to revoke
}

/**
 * Deletes revoked chat invite links. Requires administrator privileges and can_invite_users
 * right in the chat for own links and owner privileges for other links
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {string} [params.inviteLink] - Invite link to revoke
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DeleteRevokedChatInviteLinkParams, OkUnion>>}
 */
export type deleteRevokedChatInviteLink = (
  params?: DeleteRevokedChatInviteLinkParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<DeleteRevokedChatInviteLinkParams, OkUnion>>
