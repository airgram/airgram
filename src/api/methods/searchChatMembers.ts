import { ChatMembersFilterInputUnion } from '../inputs'
import { ChatMembersUnion } from '../outputs'

/**
 * Searches for a specified query in the first name, last name and username of the members
 * of a specified chat. Requires administrator rights in channels
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {string} [params.query] - Query to search for
 * @param {number} [params.limit] - The maximum number of users to be returned
 * @param {ChatMembersFilterInputUnion} [params.filter] - The type of users to return.
 * By default, chatMembersFilterMembers
 * @param {Object} state
 * @returns {ChatMembersUnion}
 */
export type SearchChatMembersMethod = <ResponseT = ChatMembersUnion>(
  params: SearchChatMembersParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SearchChatMembersParams {
  /** Chat identifier */
  chatId?: number
  /** Query to search for */
  query?: string
  /** The maximum number of users to be returned */
  limit?: number
  /** The type of users to return. By default, chatMembersFilterMembers */
  filter?: ChatMembersFilterInputUnion
}
