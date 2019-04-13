import { ChatInviteLinkInfoUnion } from '../outputs'

/**
 * Checks the validity of an invite link for a chat and returns information about the
 * corresponding chat
 * @param {Object} params
 * @param {string} [params.inviteLink] - Invite link to be checked; should begin
 * with "https://t.me/joinchat/", "https://telegram.me/joinchat/", or "https://telegram.dog/joinchat/"
 * @param {Object} state
 * @returns {ChatInviteLinkInfoUnion}
 */
export type CheckChatInviteLinkMethod = <ResponseT = ChatInviteLinkInfoUnion>(
  params: CheckChatInviteLinkParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CheckChatInviteLinkParams {
  /**
   * Invite link to be checked; should begin with "https://t.me/joinchat/", "https://telegram.me/joinchat/",
   * or "https://telegram.dog/joinchat/"
   */
  inviteLink?: string
}
