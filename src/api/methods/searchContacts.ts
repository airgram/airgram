import { UsersUnion } from '../outputs'

/**
 * Searches for the specified query in the first names, last names and usernames of
 * the known user contacts
 * @param {Object} params
 * @param {string} [params.query] - Query to search for; can be empty to return all
 * contacts
 * @param {number} [params.limit] - Maximum number of users to be returned
 * @param {Object} state
 * @returns {UsersUnion}
 */
export type SearchContactsMethod = <ResponseT = UsersUnion>(
  params: SearchContactsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SearchContactsParams {
  /** Query to search for; can be empty to return all contacts */
  query?: string
  /** Maximum number of users to be returned */
  limit?: number
}
