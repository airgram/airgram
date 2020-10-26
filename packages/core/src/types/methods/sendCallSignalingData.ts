import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SendCallSignalingDataParams {
  callId?: number // Call identifier
  data?: string // The data
}

/**
 * Sends call signaling data
 * @param {Object} params
 * @param {number} [params.callId] - Call identifier
 * @param {string} [params.data] - The data
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendCallSignalingDataParams, OkUnion>>}
 */
export type sendCallSignalingData = (
  params?: SendCallSignalingDataParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendCallSignalingDataParams, OkUnion>>
