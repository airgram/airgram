import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ProxyTypeInputUnion } from '../inputs'
import { ProxyUnion } from '../outputs'

export interface AddProxyParams {
  server?: string // Proxy server IP address
  port?: number // Proxy server port
  enable?: boolean // True, if the proxy should be enabled
  type?: ProxyTypeInputUnion // Proxy type
}

/**
 * Adds a proxy server for network requests. Can be called before authorization
 * @param {Object} params
 * @param {string} [params.server] - Proxy server IP address
 * @param {number} [params.port] - Proxy server port
 * @param {boolean} [params.enable] - True, if the proxy should be enabled
 * @param {ProxyTypeInputUnion} [params.type] - Proxy type
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AddProxyParams, ProxyUnion>>}
 */
export type addProxy<ExtensionT> = (
  params?: AddProxyParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<AddProxyParams, ProxyUnion> & ExtensionT>
