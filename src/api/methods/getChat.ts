import { ChatUnion } from '../outputs'

/**
 * Returns information about a chat by its identifier, this is an offline request if
 * the current user is not a bot
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {Object} state
 * @returns {ChatUnion}
 */
export type GetChatMethod = <ResponseT = ChatUnion>(
  params: GetChatParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetChatParams {
  /** Chat identifier */
  chatId?: number
}
