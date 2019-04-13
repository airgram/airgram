import { MessagesUnion } from '../outputs'

/**
 * Returns information about messages. If a message is not found, returns null on the
 * corresponding position of the result
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat the messages belong to
 * @param {number[]} [params.messageIds] - Identifiers of the messages to get
 * @param {Object} state
 * @returns {MessagesUnion}
 */
export type GetMessagesMethod = <ResponseT = MessagesUnion>(
  params: GetMessagesParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetMessagesParams {
  /** Identifier of the chat the messages belong to */
  chatId?: number
  /** Identifiers of the messages to get */
  messageIds?: number[]
}
