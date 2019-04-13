import { MessageUnion } from '../outputs'

/**
 * Returns the last message sent in a chat no later than the specified date
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.date] - Point in time (Unix timestamp) relative to which
 * to search for messages
 * @param {Object} state
 * @returns {MessageUnion}
 */
export type GetChatMessageByDateMethod = <ResponseT = MessageUnion>(
  params: GetChatMessageByDateParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetChatMessageByDateParams {
  /** Chat identifier */
  chatId?: number
  /** Point in time (Unix timestamp) relative to which to search for messages */
  date?: number
}
