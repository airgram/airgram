import { MessagesUnion } from '../outputs'

/**
 * Searches for call messages. Returns the results in reverse chronological order (i.
 * e., in order of decreasing message_id). For optimal performance the number of returned
 * messages is chosen by the library
 * @param {Object} params
 * @param {number} [params.fromMessageId] - Identifier of the message from which
 * to search; use 0 to get results from the last message
 * @param {number} [params.limit] - The maximum number of messages to be returned;
 * up to 100. Fewer messages may be returned than specified by the limit, even if the
 * end of the message history has not been reached
 * @param {boolean} [params.onlyMissed] - If true, returns only messages with missed
 * calls
 * @param {Object} state
 * @returns {MessagesUnion}
 */
export type SearchCallMessagesMethod = <ResponseT = MessagesUnion>(
  params: SearchCallMessagesParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SearchCallMessagesParams {
  /**
   * Identifier of the message from which to search; use 0 to get results from the last
   * message
   */
  fromMessageId?: number
  /**
   * The maximum number of messages to be returned; up to 100. Fewer messages may be returned
   * than specified by the limit, even if the end of the message history has not been
   * reached
   */
  limit?: number
  /** If true, returns only messages with missed calls */
  onlyMissed?: boolean
}
