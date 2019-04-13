import { OkUnion } from '../outputs'

/**
 * This method should be called if the chat is closed by the user. Many useful activities
 * depend on the chat being opened or closed
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {Object} state
 * @returns {OkUnion}
 */
export type CloseChatMethod = <ResponseT = OkUnion>(
  params: CloseChatParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface CloseChatParams {
  /** Chat identifier */
  chatId?: number
}
