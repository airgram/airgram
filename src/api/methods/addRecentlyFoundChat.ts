import { OkUnion } from '../outputs'

/**
 * Adds a chat to the list of recently found chats. The chat is added to the beginning
 * of the list. If the chat is already in the list, it will be removed from the list
 * first
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to add
 * @param {Object} state
 * @returns {OkUnion}
 */
export type AddRecentlyFoundChatMethod = <ResponseT = OkUnion>(
  params: AddRecentlyFoundChatParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface AddRecentlyFoundChatParams {
  /** Identifier of the chat to add */
  chatId?: number
}
