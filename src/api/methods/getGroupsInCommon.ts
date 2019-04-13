import { ChatsUnion } from '../outputs'

/**
 * Returns a list of common chats with a given user. Chats are sorted by their type
 * and creation date
 * @param {Object} params
 * @param {number} [params.userId] - User identifier
 * @param {number} [params.offsetChatId] - Chat identifier starting from which to
 * return chats; use 0 for the first request
 * @param {number} [params.limit] - Maximum number of chats to be returned; up to
 * 100
 * @param {Object} state
 * @returns {ChatsUnion}
 */
export type GetGroupsInCommonMethod = <ResponseT = ChatsUnion>(
  params: GetGroupsInCommonParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetGroupsInCommonParams {
  /** User identifier */
  userId?: number
  /** Chat identifier starting from which to return chats; use 0 for the first request */
  offsetChatId?: number
  /** Maximum number of chats to be returned; up to 100 */
  limit?: number
}
