import { TopChatCategoryInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Removes a chat from the list of frequently used chats. Supported only if the chat
 * info database is enabled
 * @param {Object} params
 * @param {TopChatCategoryInputUnion} [params.category] - Category of frequently
 * used chats
 * @param {number} [params.chatId] - Chat identifier
 * @param {Object} state
 * @returns {OkUnion}
 */
export type RemoveTopChatMethod = <ResponseT = OkUnion>(
  params: RemoveTopChatParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface RemoveTopChatParams {
  /** Category of frequently used chats */
  category?: TopChatCategoryInputUnion
  /** Chat identifier */
  chatId?: number
}
