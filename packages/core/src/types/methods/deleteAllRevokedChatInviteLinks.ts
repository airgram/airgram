import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface DeleteAllRevokedChatInviteLinksParams {
  chatId?: number // Chat identifier
  creatorUserId?: number // User identifier of a chat administrator, which links will be deleted. Must be an identifier of the current user for non-owner
}

/**
 * Deletes all revoked chat invite links created by a given chat administrator. Requires
 * administrator privileges and can_invite_users right in the chat for own links and
 * owner privileges for other links
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.creatorUserId] - User identifier of a chat administrator,
 * which links will be deleted. Must be an identifier of the current user for non-owner
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DeleteAllRevokedChatInviteLinksParams, OkUnion>>}
 */
export type deleteAllRevokedChatInviteLinks = (
  params?: DeleteAllRevokedChatInviteLinksParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<DeleteAllRevokedChatInviteLinksParams, OkUnion>>
