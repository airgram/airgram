import { OkUnion } from '../outputs'

/**
 * Adds a new member to a chat. Members can't be added to private or secret chats. Members
 * will not be added until the chat state has been synchronized with the server
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number} [params.userId] - Identifier of the user
 * @param {number} [params.forwardLimit] - The number of earlier messages from the
 * chat to be forwarded to the new member; up to 300. Ignored for supergroups and channels
 * @param {Object} state
 * @returns {OkUnion}
 */
export type AddChatMemberMethod = <ResponseT = OkUnion>(
  params: AddChatMemberParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface AddChatMemberParams {
  /** Chat identifier */
  chatId?: number
  /** Identifier of the user */
  userId?: number
  /**
   * The number of earlier messages from the chat to be forwarded to the new member; up
   * to 300. Ignored for supergroups and channels
   */
  forwardLimit?: number
}
