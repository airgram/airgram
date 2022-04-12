import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ProxyTypeInputUnion } from '../inputs'
import { ProxyUnion } from '../outputs'

export interface AddProxyParams {
  server?: string // Proxy server IP address
  port?: number // Proxy server port
  enable?: boolean // Pass true to immediately enable the proxy
  type?: ProxyTypeInputUnion // Proxy type
}

/**
 * Adds a proxy server for network requests. Can be called before authorization
 * @param {Object} params
 * @param {string} [params.server] - Proxy server IP address
 * @param {number} [params.port] - Proxy server port
 * @param {boolean} [params.enable] - Pass true to immediately enable the proxy
 * @param {ProxyTypeInputUnion} [params.type] - Proxy type
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AddProxyParams, ProxyUnion>>}
 */
export type addProxy = (
  params?: AddProxyParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<AddProxyParams, ProxyUnion>>
