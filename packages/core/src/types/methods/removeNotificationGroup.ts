import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface RemoveNotificationGroupParams {
  notificationGroupId?: number // Notification group identifier
  maxNotificationId?: number // Maximum identifier of removed notifications
}

/**
 * Removes a group of active notifications. Needs to be called only if the notification
 * group is removed by the current user
 * @param {Object} params
 * @param {number} [params.notificationGroupId] - Notification group identifier
 * @param {number} [params.maxNotificationId] - Maximum identifier of removed notifications
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RemoveNotificationGroupParams, OkUnion>>}
 */
export type removeNotificationGroup<ExtensionT> = (
  params?: RemoveNotificationGroupParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<RemoveNotificationGroupParams, OkUnion> & ExtensionT>
