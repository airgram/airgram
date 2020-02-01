import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ProxyTypeInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface TestProxyParams {
  server?: string // Proxy server IP address
  port?: number // Proxy server port
  type?: ProxyTypeInputUnion // Proxy type
  dcId?: number // Identifier of a datacenter, with which to test connection
  timeout?: number // The maximum overall timeout for the request
}

/**
 * Sends a simple network request to the Telegram servers via proxy; for testing only.
 * Can be called before authorization
 * @param {Object} params
 * @param {string} [params.server] - Proxy server IP address
 * @param {number} [params.port] - Proxy server port
 * @param {ProxyTypeInputUnion} [params.type] - Proxy type
 * @param {number} [params.dcId] - Identifier of a datacenter, with which to test
 * connection
 * @param {number} [params.timeout] - The maximum overall timeout for the request
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<TestProxyParams, OkUnion>>}
 */
export type testProxy = (
  params?: TestProxyParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<TestProxyParams, OkUnion>>
