import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TopChatCategoryInputUnion } from '../inputs'
import { ChatsUnion } from '../outputs'

export interface GetTopChatsParams {
  category?: TopChatCategoryInputUnion // Category of chats to be returned
  limit?: number // Maximum number of chats to be returned; up to 30
}

/**
 * Returns a list of frequently used chats. Supported only if the chat info database
 * is enabled
 * @param {Object} params
 * @param {TopChatCategoryInputUnion} [params.category] - Category of chats to be
 * returned
 * @param {number} [params.limit] - Maximum number of chats to be returned; up to
 * 30
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetTopChatsParams, ChatsUnion>>}
 */
export type getTopChats<ExtensionT> = (
  params?: GetTopChatsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetTopChatsParams, ChatsUnion> & ExtensionT>
