import { ChatMemberStatusInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Changes the status of a chat member, needs appropriate privileges. This function
 * is currently not suitable for adding new members to the chat; instead, use addChatMember.
 * The chat member status will not be changed until it has been synchronized with the
 * server
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.userId] - User identifier
 * @param {ChatMemberStatusInputUnion} [params.status] - The new status of the member
 * in the chat
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetChatMemberStatusMethod = <ResponseT = OkUnion>(
  params: SetChatMemberStatusParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetChatMemberStatusParams {
  /** Chat identifier */
  chatId?: number
  /** User identifier */
  userId?: number
  /** The new status of the member in the chat */
  status?: ChatMemberStatusInputUnion
}
