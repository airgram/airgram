import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatInviteLinkUnion } from '../outputs'

export interface CreateChatInviteLinkParams {
  chatId?: number // Chat identifier
  expireDate?: number // Point in time (Unix timestamp) when the link will expire; pass 0 if never
  memberLimit?: number // The maximum number of chat members that can join the chat by the link simultaneously; 0-99999; pass 0 if not limited
}

/**
 * Creates a new invite link for a chat. Available for basic groups, supergroups, and
 * channels. Requires administrator privileges and can_invite_users right in the chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.expireDate] - Point in time (Unix timestamp) when the
 * link will expire; pass 0 if never
 * @param {number} [params.memberLimit] - The maximum number of chat members that
 * can join the chat by the link simultaneously; 0-99999; pass 0 if not limited
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CreateChatInviteLinkParams, ChatInviteLinkUnion>>}
 */
export type createChatInviteLink = (
  params?: CreateChatInviteLinkParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CreateChatInviteLinkParams, ChatInviteLinkUnion>>
