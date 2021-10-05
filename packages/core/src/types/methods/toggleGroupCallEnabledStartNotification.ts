import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ToggleGroupCallEnabledStartNotificationParams {
  groupCallId?: number // Group call identifier
  enabledStartNotification?: boolean // New value of the enabled_start_notification setting
}

/**
 * Toggles whether the current user will receive a notification when the group call
 * will start; scheduled group calls only
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {boolean} [params.enabledStartNotification] - New value of the enabled_start_notification
 * setting
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleGroupCallEnabledStartNotificationParams, OkUnion>>}
 */
export type toggleGroupCallEnabledStartNotification = (
  params?: ToggleGroupCallEnabledStartNotificationParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleGroupCallEnabledStartNotificationParams, OkUnion>>
