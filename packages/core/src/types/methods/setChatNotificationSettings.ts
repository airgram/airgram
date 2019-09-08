import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatNotificationSettingsInput } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetChatNotificationSettingsParams {
  chatId?: number // Chat identifier
  notificationSettings?: ChatNotificationSettingsInput // New notification settings for the chat
}

/**
 * Changes the notification settings of a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ChatNotificationSettingsInput} [params.notificationSettings] - New notification
 * settings for the chat
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetChatNotificationSettingsParams, OkUnion>>}
 */
export type setChatNotificationSettings<ExtensionT> = (
  params?: SetChatNotificationSettingsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetChatNotificationSettingsParams, OkUnion> & ExtensionT>
