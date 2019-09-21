import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface RemoveProxyParams {
  proxyId?: number // Proxy identifier
}

/**
 * Removes a proxy server. Can be called before authorization
 * @param {Object} params
 * @param {number} [params.proxyId] - Proxy identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<RemoveProxyParams, OkUnion>>}
 */
export type removeProxy = (
  params?: RemoveProxyParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<RemoveProxyParams, OkUnion>>
