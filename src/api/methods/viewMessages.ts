import { OkUnion } from '../outputs'

/**
 * This method should be called if messages are being viewed by the user. Many useful
 * activities depend on whether the messages are currently being viewed or not (e.g.,
 * marking messages as read, incrementing a view counter, updating a view counter, removing
 * deleted messages in supergroups and channels)
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {number[]} [params.messageIds] - The identifiers of the messages being
 * viewed
 * @param {boolean} [params.forceRead] - True, if messages in closed chats should
 * be marked as read
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ViewMessagesMethod = <ResponseT = OkUnion>(
  params: ViewMessagesParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ViewMessagesParams {
  /** Chat identifier */
  chatId?: number
  /** The identifiers of the messages being viewed */
  messageIds?: number[]
  /** True, if messages in closed chats should be marked as read */
  forceRead?: boolean
}
