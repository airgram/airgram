import { OkUnion } from '../outputs'

/**
 * Deletes all messages sent by the specified user to a chat. Supported only in supergroups;
 * requires can_delete_messages administrator privileges
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.userId] - User identifier
 * @param {Object} state
 * @returns {OkUnion}
 */
export type DeleteChatMessagesFromUserMethod = <ResponseT = OkUnion>(
  params: DeleteChatMessagesFromUserParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface DeleteChatMessagesFromUserParams {
  /** Chat identifier */
  chatId?: number
  /** User identifier */
  userId?: number
}
