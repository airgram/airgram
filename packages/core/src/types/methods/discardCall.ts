import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface DiscardCallParams {
  callId?: number // Call identifier
  isDisconnected?: boolean // True, if the user was disconnected
  duration?: number // The call duration, in seconds
  connectionId?: string // Identifier of the connection used during the call
}

/**
 * Discards a call
 * @param {Object} params
 * @param {number} [params.callId] - Call identifier
 * @param {boolean} [params.isDisconnected] - True, if the user was disconnected
 * @param {number} [params.duration] - The call duration, in seconds
 * @param {string} [params.connectionId] - Identifier of the connection used during
 * the call
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<DiscardCallParams, OkUnion>>}
 */
export type discardCall = (
  params?: DiscardCallParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<DiscardCallParams, OkUnion>>
