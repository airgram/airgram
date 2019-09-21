import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatInviteLinkInfoUnion } from '../outputs'

export interface CheckChatInviteLinkParams {
  inviteLink?: string // Invite link to be checked; should begin with "https://t.me/joinchat/", "https://telegram.me/joinchat/", or "https://telegram.dog/joinchat/"
}

/**
 * Checks the validity of an invite link for a chat and returns information about the
 * corresponding chat
 * @param {Object} params
 * @param {string} [params.inviteLink] - Invite link to be checked; should begin
 * with "https://t.me/joinchat/", "https://telegram.me/joinchat/", or "https://telegram.dog/joinchat/"
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CheckChatInviteLinkParams, ChatInviteLinkInfoUnion>>}
 */
export type checkChatInviteLink = (
  params?: CheckChatInviteLinkParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CheckChatInviteLinkParams, ChatInviteLinkInfoUnion>>
