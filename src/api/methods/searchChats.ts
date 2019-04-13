import { ChatsUnion } from '../outputs'

/**
 * Searches for the specified query in the title and username of already known chats,
 * this is an offline request. Returns chats in the order seen in the chat list
 * @param {Object} params
 * @param {string} [params.query] - Query to search for. If the query is empty, returns
 * up to 20 recently found chats
 * @param {number} [params.limit] - Maximum number of chats to be returned
 * @param {Object} state
 * @returns {ChatsUnion}
 */
export type SearchChatsMethod = <ResponseT = ChatsUnion>(
  params: SearchChatsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SearchChatsParams {
  /** Query to search for. If the query is empty, returns up to 20 recently found chats */
  query?: string
  /** Maximum number of chats to be returned */
  limit?: number
}
