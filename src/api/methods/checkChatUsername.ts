import { CheckChatUsernameResultUnion } from '../outputs'

/**
 * Checks whether a username can be set for a chat
 * @param {Object} params
 * @param {number | string} [params.chatId] - Chat identifier; should be identifier
 * of a supergroup chat, or a channel chat, or a private chat with self, or zero if
 * chat is being created
 * @param {string} [params.username] - Username to be checked
 * @param {Object} state
 * @returns {CheckChatUsernameResultUnion}
 */
export type CheckChatUsernameMethod = <ResponseT = CheckChatUsernameResultUnion>(
  params: CheckChatUsernameParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CheckChatUsernameParams {
  /**
   * Chat identifier; should be identifier of a supergroup chat, or a channel chat, or
   * a private chat with self, or zero if chat is being created
   */
  chatId?: number | string
  /** Username to be checked */
  username?: string
}
