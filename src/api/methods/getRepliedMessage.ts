import { MessageUnion } from '../outputs'

/**
 * Returns information about a message that is replied by given message
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat the message belongs to
 * @param {number} [params.messageId] - Identifier of the message reply to which
 * get
 * @param {Object} state
 * @returns {MessageUnion}
 */
export type GetRepliedMessageMethod = <ResponseT = MessageUnion>(
  params: GetRepliedMessageParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetRepliedMessageParams {
  /** Identifier of the chat the message belongs to */
  chatId?: number
  /** Identifier of the message reply to which get */
  messageId?: number
}
