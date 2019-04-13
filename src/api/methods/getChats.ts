import { ChatsUnion } from '../outputs'

/**
 * Returns an ordered list of chats. Chats are sorted by the pair (order, chat_id) in
 * decreasing order. (For example, to get a list of chats from the beginning, the offset_order
 * should be equal to 2^63 - 1). For optimal performance the number of returned chats
 * is chosen by the library.
 * @param {Object} params
 * @param {number | string} [params.offsetOrder] - Chat order to return chats from
 * @param {number} [params.offsetChatId] - Chat identifier to return chats from
 * @param {number} [params.limit] - The maximum number of chats to be returned. It
 * is possible that fewer chats than the limit are returned even if the end of the list
 * is not reached
 * @param {Object} state
 * @returns {ChatsUnion}
 */
export type GetChatsMethod = <ResponseT = ChatsUnion>(
  params: GetChatsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetChatsParams {
  /** Chat order to return chats from */
  offsetOrder?: number | string
  /** Chat identifier to return chats from */
  offsetChatId?: number
  /**
   * The maximum number of chats to be returned. It is possible that fewer chats than
   * the limit are returned even if the end of the list is not reached
   */
  limit?: number
}
