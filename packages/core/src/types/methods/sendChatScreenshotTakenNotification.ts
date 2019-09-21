import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SendChatScreenshotTakenNotificationParams {
  chatId?: number // Chat identifier
}

/**
 * Sends a notification about a screenshot taken in a chat. Supported only in private
 * and secret chats
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendChatScreenshotTakenNotificationParams, OkUnion>>}
 */
export type sendChatScreenshotTakenNotification = (
  params?: SendChatScreenshotTakenNotificationParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendChatScreenshotTakenNotificationParams, OkUnion>>
