import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatUnion } from '../outputs'

export interface JoinChatByInviteLinkParams {
  inviteLink?: string // Invite link to use
}

/**
 * Uses an invite link to add the current user to the chat if possible
 * @param {Object} params
 * @param {string} [params.inviteLink] - Invite link to use
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<JoinChatByInviteLinkParams, ChatUnion>>}
 */
export type joinChatByInviteLink = (
  params?: JoinChatByInviteLinkParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<JoinChatByInviteLinkParams, ChatUnion>>
