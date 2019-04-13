import { ChatMemberUnion } from '../outputs'

/**
 * Returns information about a single member of a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.userId] - User identifier
 * @param {Object} state
 * @returns {ChatMemberUnion}
 */
export type GetChatMemberMethod = <ResponseT = ChatMemberUnion>(
  params: GetChatMemberParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetChatMemberParams {
  /** Chat identifier */
  chatId?: number
  /** User identifier */
  userId?: number
}
