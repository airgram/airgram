import { ApiRequestOptions, ApiResponse } from '../airgram'
import { DeviceTokenInputUnion } from '../inputs'
import { PushReceiverIdUnion } from '../outputs'

export interface RegisterDeviceParams {
  deviceToken?: DeviceTokenInputUnion // Device token
  otherUserIds?: number[] // List of user identifiers of other users currently using the client
}

/**
 * Registers the currently used device for receiving push notifications. Returns a globally
 * unique identifier of the push notification subscription
 * @param {Object} params
 * @param {DeviceTokenInputUnion} [params.deviceToken] - Device token
 * @param {number[]} [params.otherUserIds] - List of user identifiers of other users
 * currently using the client
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RegisterDeviceParams, PushReceiverIdUnion>>}
 */
export type registerDevice<ExtensionT> = (
  params?: RegisterDeviceParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<RegisterDeviceParams, PushReceiverIdUnion> & ExtensionT>
