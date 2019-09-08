import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ToggleChatDefaultDisableNotificationParams {
  chatId?: number // Chat identifier
  defaultDisableNotification?: boolean // New value of default_disable_notification
}

/**
 * Changes the value of the default disable_notification parameter, used when a message
 * is sent to a chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {boolean} [params.defaultDisableNotification] - New value of default_disable_notification
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleChatDefaultDisableNotificationParams, OkUnion>>}
 */
export type toggleChatDefaultDisableNotification<ExtensionT> = (
  params?: ToggleChatDefaultDisableNotificationParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleChatDefaultDisableNotificationParams, OkUnion> & ExtensionT>
