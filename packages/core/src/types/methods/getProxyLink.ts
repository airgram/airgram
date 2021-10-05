import { ApiRequestOptions, ApiResponse } from '../airgram'
import { HttpUrlUnion } from '../outputs'

export interface GetProxyLinkParams {
  proxyId?: number // Proxy identifier
}

/**
 * Returns an HTTPS link, which can be used to add a proxy. Available only for SOCKS5
 * and MTProto proxies. Can be called before authorization
 * @param {Object} params
 * @param {number} [params.proxyId] - Proxy identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetProxyLinkParams, HttpUrlUnion>>}
 */
export type getProxyLink = (
  params?: GetProxyLinkParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetProxyLinkParams, HttpUrlUnion>>
