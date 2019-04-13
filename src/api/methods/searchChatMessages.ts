import { SearchMessagesFilterInputUnion } from '../inputs'
import { MessagesUnion } from '../outputs'

/**
 * Searches for messages with given words in the chat. Returns the results in reverse
 * chronological order, i.e. in order of decreasing message_id. Cannot be used in secret
 * chats with a non-empty query (searchSecretMessages should be used instead), or without
 * an enabled message database. For optimal performance the number of returned messages
 * is chosen by the library
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat in which to search messages
 * @param {string} [params.query] - Query to search for
 * @param {number} [params.senderUserId] - If not 0, only messages sent by the specified
 * user will be returned. Not supported in secret chats
 * @param {number} [params.fromMessageId] - Identifier of the message starting from
 * which history must be fetched; use 0 to get results from the last message
 * @param {number} [params.offset] - Specify 0 to get results from exactly the from_message_id
 * or a negative offset to get the specified message and some newer messages
 * @param {number} [params.limit] - The maximum number of messages to be returned;
 * must be positive and can't be greater than 100. If the offset is negative, the limit
 * must be greater than -offset. Fewer messages may be returned than specified by the
 * limit, even if the end of the message history has not been reached
 * @param {SearchMessagesFilterInputUnion} [params.filter] - Filter for message content
 * in the search results
 * @param {Object} state
 * @returns {MessagesUnion}
 */
export type SearchChatMessagesMethod = <ResponseT = MessagesUnion>(
  params: SearchChatMessagesParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SearchChatMessagesParams {
  /** Identifier of the chat in which to search messages */
  chatId?: number
  /** Query to search for */
  query?: string
  /**
   * If not 0, only messages sent by the specified user will be returned. Not supported
   * in secret chats
   */
  senderUserId?: number
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
  /** Filter for message content in the search results */
  filter?: SearchMessagesFilterInputUnion
}
