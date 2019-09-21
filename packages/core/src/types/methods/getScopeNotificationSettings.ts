import { ApiRequestOptions, ApiResponse } from '../airgram'
import { NotificationSettingsScopeInputUnion } from '../inputs'
import { ScopeNotificationSettingsUnion } from '../outputs'

export interface GetScopeNotificationSettingsParams {
  scope?: NotificationSettingsScopeInputUnion // Types of chats for which to return the notification settings information
}

/**
 * Returns the notification settings for chats of a given type
 * @param {Object} params
 * @param {NotificationSettingsScopeInputUnion} [params.scope] - Types of chats for
 * which to return the notification settings information
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetScopeNotificationSettingsParams, ScopeNotificationSettingsUnion>>}
 */
export type getScopeNotificationSettings = (
  params?: GetScopeNotificationSettingsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetScopeNotificationSettingsParams, ScopeNotificationSettingsUnion>>
