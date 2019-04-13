import { OkUnion } from '../outputs'

/**
 * Deletes the default reply markup from a chat. Must be called after a one-time keyboard
 * or a ForceReply reply markup has been used. UpdateChatReplyMarkup will be sent if
 * the reply markup will be changed
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.messageId] - The message identifier of the used keyboard
 * @param {Object} state
 * @returns {OkUnion}
 */
export type DeleteChatReplyMarkupMethod = <ResponseT = OkUnion>(
  params: DeleteChatReplyMarkupParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface DeleteChatReplyMarkupParams {
  /** Chat identifier */
  chatId?: number
  /** The message identifier of the used keyboard */
  messageId?: number
}
