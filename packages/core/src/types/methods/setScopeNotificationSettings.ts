import { ApiRequestOptions, ApiResponse } from '../airgram'
import {
  NotificationSettingsScopeInputUnion,
  ScopeNotificationSettingsInput
} from '../inputs'
import { OkUnion } from '../outputs'

export interface SetScopeNotificationSettingsParams {
  scope?: NotificationSettingsScopeInputUnion // Types of chats for which to change the notification settings
  notificationSettings?: ScopeNotificationSettingsInput // The new notification settings for the given scope
}

/**
 * Changes notification settings for chats of a given type
 * @param {Object} params
 * @param {NotificationSettingsScopeInputUnion} [params.scope] - Types of chats for
 * which to change the notification settings
 * @param {ScopeNotificationSettingsInput} [params.notificationSettings] - The new
 * notification settings for the given scope
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetScopeNotificationSettingsParams, OkUnion>>}
 */
export type setScopeNotificationSettings = (
  params?: SetScopeNotificationSettingsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetScopeNotificationSettingsParams, OkUnion>>
