import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatUnion } from '../outputs'

export interface SearchPublicChatParams {
  username?: string // Username to be resolved
}

/**
 * Searches a public chat by its username. Currently only private chats, supergroups
 * and channels can be public. Returns the chat if found; otherwise an error is returned
 * @param {Object} params
 * @param {string} [params.username] - Username to be resolved
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SearchPublicChatParams, ChatUnion>>}
 */
export type searchPublicChat = (
  params?: SearchPublicChatParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SearchPublicChatParams, ChatUnion>>
