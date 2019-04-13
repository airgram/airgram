import { ChatInviteLinkUnion } from '../outputs'

/**
 * Generates a new invite link for a chat; the previously generated link is revoked.
 * Available for basic groups, supergroups, and channels. In basic groups this can be
 * called only by the group's creator; in supergroups and channels this requires appropriate
 * administrator rights
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {Object} state
 * @returns {ChatInviteLinkUnion}
 */
export type GenerateChatInviteLinkMethod = <ResponseT = ChatInviteLinkUnion>(
  params: GenerateChatInviteLinkParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GenerateChatInviteLinkParams {
  /** Chat identifier */
  chatId?: number
}
