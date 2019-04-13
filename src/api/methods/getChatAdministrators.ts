import { UsersUnion } from '../outputs'

/**
 * Returns a list of users who are administrators of the chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {Object} state
 * @returns {UsersUnion}
 */
export type GetChatAdministratorsMethod = <ResponseT = UsersUnion>(
  params: GetChatAdministratorsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetChatAdministratorsParams {
  /** Chat identifier */
  chatId?: number
}
