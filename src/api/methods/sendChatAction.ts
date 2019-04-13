import { ChatActionInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Sends a notification about user activity in a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ChatActionInputUnion} [params.action] - The action description
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SendChatActionMethod = <ResponseT = OkUnion>(
  params: SendChatActionParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SendChatActionParams {
  /** Chat identifier */
  chatId?: number
  /** The action description */
  action?: ChatActionInputUnion
}
