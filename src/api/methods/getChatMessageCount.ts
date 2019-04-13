import { SearchMessagesFilterInputUnion } from '../inputs'
import { CountUnion } from '../outputs'

/**
 * Returns approximate number of messages of the specified type in the chat
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat in which to count messages
 * @param {SearchMessagesFilterInputUnion} [params.filter] - Filter for message content;
 * searchMessagesFilterEmpty is unsupported in this function
 * @param {boolean} [params.returnLocal] - If true, returns count that is available
 * locally without sending network requests, returning -1 if the number of messages
 * is unknown
 * @param {Object} state
 * @returns {CountUnion}
 */
export type GetChatMessageCountMethod = <ResponseT = CountUnion>(
  params: GetChatMessageCountParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetChatMessageCountParams {
  /** Identifier of the chat in which to count messages */
  chatId?: number
  /** Filter for message content; searchMessagesFilterEmpty is unsupported in this function */
  filter?: SearchMessagesFilterInputUnion
  /**
   * If true, returns count that is available locally without sending network requests,
   * returning -1 if the number of messages is unknown
   */
  returnLocal?: boolean
}
