import { MessageUnion } from '../outputs'

/**
 * Returns information about a message
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat the message belongs to
 * @param {number} [params.messageId] - Identifier of the message to get
 * @param {Object} state
 * @returns {MessageUnion}
 */
export type GetMessageMethod = <ResponseT = MessageUnion>(
  params: GetMessageParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetMessageParams {
  /** Identifier of the chat the message belongs to */
  chatId?: number
  /** Identifier of the message to get */
  messageId?: number
}
