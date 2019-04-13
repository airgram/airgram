import {
  NotificationSettingsScopeInputUnion,
  ScopeNotificationSettingsInput
} from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Changes notification settings for chats of a given type
 * @param {Object} params
 * @param {NotificationSettingsScopeInputUnion} [params.scope] - Types of chats for
 * which to change the notification settings
 * @param {ScopeNotificationSettingsInput} [params.notificationSettings] - The new
 * notification settings for the given scope
 * @param {Object} state
 * @returns {OkUnion}
 */
export type SetScopeNotificationSettingsMethod = <ResponseT = OkUnion>(
  params: SetScopeNotificationSettingsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetScopeNotificationSettingsParams {
  /** Types of chats for which to change the notification settings */
  scope?: NotificationSettingsScopeInputUnion
  /** The new notification settings for the given scope */
  notificationSettings?: ScopeNotificationSettingsInput
}
