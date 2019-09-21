import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatsUnion } from '../outputs'

/**
 * Returns a list of public chats with username created by the user
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, ChatsUnion>>}
 */
export type getCreatedPublicChats = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, ChatsUnion>>
