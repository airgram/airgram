import { MessageUnion } from '../outputs'

/**
 * Returns information about a pinned chat message
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat the message belongs to
 * @param {Object} state
 * @returns {MessageUnion}
 */
export type GetChatPinnedMessageMethod = <ResponseT = MessageUnion>(
  params: GetChatPinnedMessageParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetChatPinnedMessageParams {
  /** Identifier of the chat the message belongs to */
  chatId?: number
}
