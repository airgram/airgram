import { ChatUnion } from '../outputs'

/**
 * Searches a public chat by its username. Currently only private chats, supergroups
 * and channels can be public. Returns the chat if found; otherwise an error is returned
 * @param {Object} params
 * @param {string} [params.username] - Username to be resolved
 * @param {Object} state
 * @returns {ChatUnion}
 */
export type SearchPublicChatMethod = <ResponseT = ChatUnion>(
  params: SearchPublicChatParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SearchPublicChatParams {
  /** Username to be resolved */
  username?: string
}
