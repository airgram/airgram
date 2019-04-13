import { OkUnion } from '../outputs'

/**
 * Deletes all messages in the chat only for the user. Cannot be used in channels and
 * public supergroups
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {boolean} [params.removeFromChatList] - Pass true if the chat should be
 * removed from the chats list
 * @param {Object} state
 * @returns {OkUnion}
 */
export type DeleteChatHistoryMethod = <ResponseT = OkUnion>(
  params: DeleteChatHistoryParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface DeleteChatHistoryParams {
  /** Chat identifier */
  chatId?: number
  /** Pass true if the chat should be removed from the chats list */
  removeFromChatList?: boolean
}
