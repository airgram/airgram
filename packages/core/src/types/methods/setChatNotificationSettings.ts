import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatNotificationSettingsInput } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetChatNotificationSettingsParams {
  chatId?: number // Chat identifier
  notificationSettings?: ChatNotificationSettingsInput // New notification settings for the chat. If the chat is muted for more than 1 week, it is considered to be muted forever
}

/**
 * Changes the notification settings of a chat. Notification settings of a chat with
 * the current user (Saved Messages) can't be changed
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ChatNotificationSettingsInput} [params.notificationSettings] - New notification
 * settings for the chat. If the chat is muted for more than 1 week, it is considered
 * to be muted forever
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatNotificationSettingsParams, OkUnion>>}
 */
export type setChatNotificationSettings = (
  params?: SetChatNotificationSettingsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetChatNotificationSettingsParams, OkUnion>>
