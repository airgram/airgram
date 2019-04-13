import { MessagesUnion } from '../outputs'

/**
 * Searches for messages in all chats except secret chats. Returns the results in reverse
 * chronological order (i.e., in order of decreasing (date, chat_id, message_id)). For
 * optimal performance the number of returned messages is chosen by the library
 * @param {Object} params
 * @param {string} [params.query] - Query to search for
 * @param {number} [params.offsetDate] - The date of the message starting from which
 * the results should be fetched. Use 0 or any date in the future to get results from
 * the last message
 * @param {number} [params.offsetChatId] - The chat identifier of the last found
 * message, or 0 for the first request
 * @param {number} [params.offsetMessageId] - The message identifier of the last
 * found message, or 0 for the first request
 * @param {number} [params.limit] - The maximum number of messages to be returned,
 * up to 100. Fewer messages may be returned than specified by the limit, even if the
 * end of the message history has not been reached
 * @param {Object} state
 * @returns {MessagesUnion}
 */
export type SearchMessagesMethod = <ResponseT = MessagesUnion>(
  params: SearchMessagesParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SearchMessagesParams {
  /** Query to search for */
  query?: string
  /**
   * The date of the message starting from which the results should be fetched. Use 0
   * or any date in the future to get results from the last message
   */
  offsetDate?: number
  /** The chat identifier of the last found message, or 0 for the first request */
  offsetChatId?: number
  /** The message identifier of the last found message, or 0 for the first request */
  offsetMessageId?: number
  /**
   * The maximum number of messages to be returned, up to 100. Fewer messages may be returned
   * than specified by the limit, even if the end of the message history has not been
   * reached
   */
  limit?: number
}
