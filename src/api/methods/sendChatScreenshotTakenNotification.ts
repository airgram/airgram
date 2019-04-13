import { OkUnion } from '../outputs'

/**
 * Sends a notification about a screenshot taken in a chat. Supported only in private
 * and secret chats
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SendChatScreenshotTakenNotificationMethod = <ResponseT = OkUnion>(
  params: SendChatScreenshotTakenNotificationParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SendChatScreenshotTakenNotificationParams {
  /** Chat identifier */
  chatId?: number
}
