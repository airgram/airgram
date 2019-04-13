import { DeviceTokenInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Registers the currently used device for receiving push notifications
 * @param {Object} params
 * @param {DeviceTokenInputUnion} [params.deviceToken] - Device token
 * @param {number[]} [params.otherUserIds] - List of at most 100 user identifiers
 * of other users currently using the client
 * @param {Object} state
 * @returns {OkUnion}
 */
export type RegisterDeviceMethod = <ResponseT = OkUnion>(
  params: RegisterDeviceParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface RegisterDeviceParams {
  /** Device token */
  deviceToken?: DeviceTokenInputUnion
  /** List of at most 100 user identifiers of other users currently using the client */
  otherUserIds?: number[]
}
