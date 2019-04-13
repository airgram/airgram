import { TopChatCategoryInputUnion } from '../inputs'
import { ChatsUnion } from '../outputs'

/**
 * Returns a list of frequently used chats. Supported only if the chat info database
 * is enabled
 * @param {Object} params
 * @param {TopChatCategoryInputUnion} [params.category] - Category of chats to be
 * returned
 * @param {number} [params.limit] - Maximum number of chats to be returned; up to
 * 30
 * @param {Object} state
 * @returns {ChatsUnion}
 */
export type GetTopChatsMethod = <ResponseT = ChatsUnion>(
  params: GetTopChatsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetTopChatsParams {
  /** Category of chats to be returned */
  category?: TopChatCategoryInputUnion
  /** Maximum number of chats to be returned; up to 30 */
  limit?: number
}
