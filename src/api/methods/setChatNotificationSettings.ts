import { ChatNotificationSettingsInput } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Changes the notification settings of a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {ChatNotificationSettingsInput} [params.notificationSettings] - New notification
 * settings for the chat
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetChatNotificationSettingsMethod = <ResponseT = OkUnion>(
  params: SetChatNotificationSettingsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetChatNotificationSettingsParams {
  /** Chat identifier */
  chatId?: number
  /** New notification settings for the chat */
  notificationSettings?: ChatNotificationSettingsInput
}
