import { OkUnion } from '../outputs'

/**
 * Changes the value of the default disable_notification parameter, used when a message
 * is sent to a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {boolean} [params.defaultDisableNotification] - New value of default_disable_notification
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ToggleChatDefaultDisableNotificationMethod = <ResponseT = OkUnion>(
  params: ToggleChatDefaultDisableNotificationParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface ToggleChatDefaultDisableNotificationParams {
  /** Chat identifier */
  chatId?: number
  /** New value of default_disable_notification */
  defaultDisableNotification?: boolean
}
