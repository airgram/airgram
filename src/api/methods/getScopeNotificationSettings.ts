import { NotificationSettingsScopeInputUnion } from '../inputs'
import { ScopeNotificationSettingsUnion } from '../outputs'

/**
 * Returns the notification settings for chats of a given type
 * @param {Object} params
 * @param {NotificationSettingsScopeInputUnion} [params.scope] - Types of chats for
 * which to return the notification settings information
 * @param {Object} state
 * @returns {ScopeNotificationSettingsUnion}
 */
export type GetScopeNotificationSettingsMethod = <ResponseT = ScopeNotificationSettingsUnion>(
  params: GetScopeNotificationSettingsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetScopeNotificationSettingsParams {
  /** Types of chats for which to return the notification settings information */
  scope?: NotificationSettingsScopeInputUnion
}
