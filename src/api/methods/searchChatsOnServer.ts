import { ChatsUnion } from '../outputs'

/**
 * Searches for the specified query in the title and username of already known chats
 * via request to the server. Returns chats in the order seen in the chat list
 * @param {Object} params
 * @param {string} [params.query] - Query to search for
 * @param {number} [params.limit] - Maximum number of chats to be returned
 * @param {Object} state
 * @returns {ChatsUnion}
 */
export type SearchChatsOnServerMethod = <ResponseT = ChatsUnion>(
  params: SearchChatsOnServerParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SearchChatsOnServerParams {
  /** Query to search for */
  query?: string
  /** Maximum number of chats to be returned */
  limit?: number
}
