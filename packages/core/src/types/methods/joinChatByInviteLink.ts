import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatUnion } from '../outputs'

export interface JoinChatByInviteLinkParams {
  inviteLink?: string // Invite link to import; should begin with "https://t.me/joinchat/", "https://telegram.me/joinchat/", or "https://telegram.dog/joinchat/"
}

/**
 * Uses an invite link to add the current user to the chat if possible. The new member
 * will not be added until the chat state has been synchronized with the server
 * @param {Object} params
 * @param {string} [params.inviteLink] - Invite link to import; should begin with
 * "https://t.me/joinchat/", "https://telegram.me/joinchat/", or "https://telegram.dog/joinchat/"
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<JoinChatByInviteLinkParams, ChatUnion>>}
 */
export type joinChatByInviteLink = (
  params?: JoinChatByInviteLinkParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<JoinChatByInviteLinkParams, ChatUnion>>
