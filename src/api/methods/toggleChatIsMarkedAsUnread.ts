import { OkUnion } from '../outputs'

/**
 * Changes the marked as unread state of a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {boolean} [params.isMarkedAsUnread] - New value of is_marked_as_unread
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ToggleChatIsMarkedAsUnreadMethod = <ResponseT = OkUnion>(
  params: ToggleChatIsMarkedAsUnreadParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ToggleChatIsMarkedAsUnreadParams {
  /** Chat identifier */
  chatId?: number
  /** New value of is_marked_as_unread */
  isMarkedAsUnread?: boolean
}
