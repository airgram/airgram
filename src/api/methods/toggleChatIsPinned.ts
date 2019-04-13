import { OkUnion } from '../outputs'

/**
 * Changes the pinned state of a chat. You can pin up to GetOption("pinned_chat_count_max")
 * non-secret chats and the same number of secret chats
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {boolean} [params.isPinned] - New value of is_pinned
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ToggleChatIsPinnedMethod = <ResponseT = OkUnion>(
  params: ToggleChatIsPinnedParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ToggleChatIsPinnedParams {
  /** Chat identifier */
  chatId?: number
  /** New value of is_pinned */
  isPinned?: boolean
}
