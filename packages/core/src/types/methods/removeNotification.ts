import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface RemoveNotificationParams {
  notificationGroupId?: number // Identifier of notification group to which the notification belongs
  notificationId?: number // Identifier of removed notification
}

/**
 * Removes an active notification from notification list. Needs to be called only if
 * the notification is removed by the current user
 * @param {Object} params
 * @param {number} [params.notificationGroupId] - Identifier of notification group
 * to which the notification belongs
 * @param {number} [params.notificationId] - Identifier of removed notification
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RemoveNotificationParams, OkUnion>>}
 */
export type removeNotification<ExtensionT> = (
  params?: RemoveNotificationParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<RemoveNotificationParams, OkUnion> & ExtensionT>
