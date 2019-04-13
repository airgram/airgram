import { OkUnion } from '../outputs'

/**
 * Resets all notification settings to their default values. By default, all chats are
 * unmuted, the sound is set to "default" and message previews are shown
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ResetAllNotificationSettingsMethod = <ResponseT = OkUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
