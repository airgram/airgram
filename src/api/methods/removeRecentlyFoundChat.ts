import { OkUnion } from '../outputs'

/**
 * Removes a chat from the list of recently found chats
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to be removed
 * @param {Object} state
 * @returns {OkUnion}
 */
export type RemoveRecentlyFoundChatMethod = <ResponseT = OkUnion>(
  params: RemoveRecentlyFoundChatParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface RemoveRecentlyFoundChatParams {
  /** Identifier of the chat to be removed */
  chatId?: number
}
