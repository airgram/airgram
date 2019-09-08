import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SendCallDebugInformationParams {
  callId?: number // Call identifier
  debugInformation?: string // Debug information in application-specific format
}

/**
 * Sends debug information for a call
 * @param {Object} params
 * @param {number} [params.callId] - Call identifier
 * @param {string} [params.debugInformation] - Debug information in application-specific
 * format
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendCallDebugInformationParams, OkUnion>>}
 */
export type sendCallDebugInformation<ExtensionT> = (
  params?: SendCallDebugInformationParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendCallDebugInformationParams, OkUnion> & ExtensionT>
