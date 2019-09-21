import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatInviteLinkUnion } from '../outputs'

export interface GenerateChatInviteLinkParams {
  chatId?: number // Chat identifier
}

/**
 * Generates a new invite link for a chat; the previously generated link is revoked.
 * Available for basic groups, supergroups, and channels. Requires administrator privileges
 * and can_invite_users right
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GenerateChatInviteLinkParams, ChatInviteLinkUnion>>}
 */
export type generateChatInviteLink = (
  params?: GenerateChatInviteLinkParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GenerateChatInviteLinkParams, ChatInviteLinkUnion>>
