import { OkUnion } from '../outputs'

/**
 * Marks all mentions in a chat as read
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ReadAllChatMentionsMethod = <ResponseT = OkUnion>(
  params: ReadAllChatMentionsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ReadAllChatMentionsParams {
  /** Chat identifier */
  chatId?: number
}
