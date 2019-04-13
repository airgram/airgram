import { OkUnion } from '../outputs'

/**
 * Adds current user as a new member to a chat. Private and secret chats can't be joined
 * using this method
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {Object} state
 * @returns {OkUnion}
 */
export type JoinChatMethod = <ResponseT = OkUnion>(
  params: JoinChatParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface JoinChatParams {
  /** Chat identifier */
  chatId?: number
}
