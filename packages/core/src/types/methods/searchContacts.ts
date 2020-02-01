import { ApiRequestOptions, ApiResponse } from '../airgram'
import { UsersUnion } from '../outputs'

export interface SearchContactsParams {
  query?: string // Query to search for; may be empty to return all contacts
  limit?: number // The maximum number of users to be returned
}

/**
 * Searches for the specified query in the first names, last names and usernames of
 * the known user contacts
 * @param {Object} params
 * @param {string} [params.query] - Query to search for; may be empty to return all
 * contacts
 * @param {number} [params.limit] - The maximum number of users to be returned
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchContactsParams, UsersUnion>>}
 */
export type searchContacts = (
  params?: SearchContactsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchContactsParams, UsersUnion>>
