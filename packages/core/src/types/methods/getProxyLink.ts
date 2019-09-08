import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TextUnion } from '../outputs'

export interface GetProxyLinkParams {
  proxyId?: number // Proxy identifier
}

/**
 * Returns an HTTPS link, which can be used to add a proxy. Available only for SOCKS5
 * and MTProto proxies. Can be called before authorization
 * @param {Object} params
 * @param {number} [params.proxyId] - Proxy identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetProxyLinkParams, TextUnion>>}
 */
export type getProxyLink<ExtensionT> = (
  params?: GetProxyLinkParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetProxyLinkParams, TextUnion> & ExtensionT>
