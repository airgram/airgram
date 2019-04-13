import { ChatsUnion } from '../outputs'

/**
 * Searches public chats by looking for specified query in their username and title.
 * Currently only private chats, supergroups and channels can be public. Returns a meaningful
 * number of results. Returns nothing if the length of the searched username prefix
 * is less than 5. Excludes private chats with contacts and chats from the chat list
 * from the results
 * @param {Object} params
 * @param {string} [params.query] - Query to search for
 * @param {Object} state
 * @returns {ChatsUnion}
 */
export type SearchPublicChatsMethod = <ResponseT = ChatsUnion>(
  params: SearchPublicChatsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SearchPublicChatsParams {
  /** Query to search for */
  query?: string
}
