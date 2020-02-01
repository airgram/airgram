import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PushReceiverIdUnion } from '../outputs'

export interface GetPushReceiverIdParams {
  payload?: string // JSON-encoded push notification payload
}

/**
 * Returns a globally unique push notification subscription identifier for identification
 * of an account, which has received a push notification. This is an offline method.
 * Can be called before authorization. Can be called synchronously
 * @param {Object} params
 * @param {string} [params.payload] - JSON-encoded push notification payload
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetPushReceiverIdParams, PushReceiverIdUnion>>}
 */
export type getPushReceiverId = (
  params?: GetPushReceiverIdParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetPushReceiverIdParams, PushReceiverIdUnion>>

export type getPushReceiverIdSync = (params?: GetPushReceiverIdParams) => PushReceiverIdUnion
