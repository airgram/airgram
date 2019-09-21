import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ProcessPushNotificationParams {
  payload?: string // JSON-encoded push notification payload with all fields sent by the server, and "google.sent_time" and "google.notification.sound" fields added
}

/**
 * Handles a push notification. Returns error with code 406 if the push notification
 * is not supported and connection to the server is required to fetch new data. Can
 * be called before authorization
 * @param {Object} params
 * @param {string} [params.payload] - JSON-encoded push notification payload with
 * all fields sent by the server, and "google.sent_time" and "google.notification.sound"
 * fields added
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ProcessPushNotificationParams, OkUnion>>}
 */
export type processPushNotification = (
  params?: ProcessPushNotificationParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ProcessPushNotificationParams, OkUnion>>
