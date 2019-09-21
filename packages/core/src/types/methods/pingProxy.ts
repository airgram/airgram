import { ApiRequestOptions, ApiResponse } from '../airgram'
import { SecondsUnion } from '../outputs'

export interface PingProxyParams {
  proxyId?: number // Proxy identifier. Use 0 to ping a Telegram server without a proxy
}

/**
 * Computes time needed to receive a response from a Telegram server through a proxy.
 * Can be called before authorization
 * @param {Object} params
 * @param {number} [params.proxyId] - Proxy identifier. Use 0 to ping a Telegram
 * server without a proxy
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<PingProxyParams, SecondsUnion>>}
 */
export type pingProxy = (
  params?: PingProxyParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<PingProxyParams, SecondsUnion>>
