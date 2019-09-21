import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface EnableProxyParams {
  proxyId?: number // Proxy identifier
}

/**
 * Enables a proxy. Only one proxy can be enabled at a time. Can be called before authorization
 * @param {Object} params
 * @param {number} [params.proxyId] - Proxy identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EnableProxyParams, OkUnion>>}
 */
export type enableProxy = (
  params?: EnableProxyParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<EnableProxyParams, OkUnion>>
