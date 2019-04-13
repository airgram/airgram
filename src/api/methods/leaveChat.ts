import { OkUnion } from '../outputs'

/**
 * Removes current user from chat members. Private and secret chats can't be left using
 * this method
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {Object} state
 * @returns {OkUnion}
 */
export type LeaveChatMethod = <ResponseT = OkUnion>(
  params: LeaveChatParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface LeaveChatParams {
  /** Chat identifier */
  chatId?: number
}
