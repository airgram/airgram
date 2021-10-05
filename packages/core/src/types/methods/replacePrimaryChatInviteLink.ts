import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatInviteLinkUnion } from '../outputs'

export interface ReplacePrimaryChatInviteLinkParams {
  chatId?: number // Chat identifier
}

/**
 * Replaces current primary invite link for a chat with a new primary invite link. Available
 * for basic groups, supergroups, and channels. Requires administrator privileges and
 * can_invite_users right
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ReplacePrimaryChatInviteLinkParams, ChatInviteLinkUnion>>}
 */
export type replacePrimaryChatInviteLink = (
  params?: ReplacePrimaryChatInviteLinkParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ReplacePrimaryChatInviteLinkParams, ChatInviteLinkUnion>>
