import { ApiRequestOptions, ApiResponse } from '../airgram'
import { UsersUnion } from '../outputs'



/**
 * Returns all user contacts
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, UsersUnion>>}
 */
export type getContacts = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, UsersUnion>>
