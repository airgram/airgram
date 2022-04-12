import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ProxyTypeInputUnion } from '../inputs'
import { ProxyUnion } from '../outputs'

export interface EditProxyParams {
  proxyId?: number // Proxy identifier
  server?: string // Proxy server IP address
  port?: number // Proxy server port
  enable?: boolean // Pass true to immediately enable the proxy
  type?: ProxyTypeInputUnion // Proxy type
}

/**
 * Edits an existing proxy server for network requests. Can be called before authorization
 * @param {Object} params
 * @param {number} [params.proxyId] - Proxy identifier
 * @param {string} [params.server] - Proxy server IP address
 * @param {number} [params.port] - Proxy server port
 * @param {boolean} [params.enable] - Pass true to immediately enable the proxy
 * @param {ProxyTypeInputUnion} [params.type] - Proxy type
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<EditProxyParams, ProxyUnion>>}
 */
export type editProxy = (
  params?: EditProxyParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<EditProxyParams, ProxyUnion>>
