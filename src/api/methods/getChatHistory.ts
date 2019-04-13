import { MessagesUnion } from '../outputs'

/**
 * Returns messages in a chat. The messages are returned in a reverse chronological
 * order (i.e., in order of decreasing message_id). For optimal performance the number
 * of returned messages is chosen by the library. This is an offline request if only_local
 * is true
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.fromMessageId] - Identifier of the message starting from
 * which history must be fetched; use 0 to get results from the last message
 * @param {number} [params.offset] - Specify 0 to get results from exactly the from_message_id
 * or a negative offset to get the specified message and some newer messages
 * @param {number} [params.limit] - The maximum number of messages to be returned;
 * must be positive and can't be greater than 100. If the offset is negative, the limit
 * must be greater than -offset. Fewer messages may be returned than specified by the
 * limit, even if the end of the message history has not been reached
 * @param {boolean} [params.onlyLocal] - If true, returns only messages that are
 * available locally without sending network requests
 * @param {Object} state
 * @returns {MessagesUnion}
 */
export type GetChatHistoryMethod = <ResponseT = MessagesUnion>(
  params: GetChatHistoryParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetChatHistoryParams {
  /** Chat identifier */
  chatId?: number
  /**
   * Identifier of the message starting from which history must be fetched; use 0 to get
   * results from the last message
   */
  fromMessageId?: number
  /**
   * Specify 0 to get results from exactly the from_message_id or a negative offset to
   * get the specified message and some newer messages
   */
  offset?: number
  /**
   * The maximum number of messages to be returned; must be positive and can't be greater
   * than 100. If the offset is negative, the limit must be greater than -offset. Fewer
   * messages may be returned than specified by the limit, even if the end of the message
   * history has not been reached
   */
  limit?: number
  /**
   * If true, returns only messages that are available locally without sending network
   * requests
   */
  onlyLocal?: boolean
}
