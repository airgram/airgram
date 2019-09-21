import { ApiRequestOptions, ApiResponse } from '../airgram'
import { CustomRequestResultUnion } from '../outputs'

export interface SendCustomRequestParams {
  method?: string // The method name
  parameters?: string // JSON-serialized method parameters
}

/**
 * Sends a custom request; for bots only
 * @param {Object} params
 * @param {string} [params.method] - The method name
 * @param {string} [params.parameters] - JSON-serialized method parameters
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendCustomRequestParams, CustomRequestResultUnion>>}
 */
export type sendCustomRequest = (
  params?: SendCustomRequestParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendCustomRequestParams, CustomRequestResultUnion>>
