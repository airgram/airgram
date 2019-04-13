import { ChatUnion } from '../outputs'

/**
 * Uses an invite link to add the current user to the chat if possible. The new member
 * will not be added until the chat state has been synchronized with the server
 * @param {Object} params
 * @param {string} [params.inviteLink] - Invite link to import; should begin with
 * "https://t.me/joinchat/", "https://telegram.me/joinchat/", or "https://telegram.dog/joinchat/"
 * @param {Object} state
 * @returns {ChatUnion}
 */
export type JoinChatByInviteLinkMethod = <ResponseT = ChatUnion>(
  params: JoinChatByInviteLinkParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface JoinChatByInviteLinkParams {
  /**
   * Invite link to import; should begin with "https://t.me/joinchat/", "https://telegram.me/joinchat/",
   * or "https://telegram.dog/joinchat/"
   */
  inviteLink?: string
}
