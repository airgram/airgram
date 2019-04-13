import { OkUnion } from '../outputs'

/**
 * This method should be called if the chat is opened by the user. Many useful activities
 * depend on the chat being opened or closed (e.g., in supergroups and channels all
 * updates are received only for opened chats)
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {Object} state
 * @returns {OkUnion}
 */
export type OpenChatMethod = <ResponseT = OkUnion>(
  params: OpenChatParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface OpenChatParams {
  /** Chat identifier */
  chatId?: number
}
