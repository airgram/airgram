import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ProxyTypeInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface TestProxyParams {
  server?: string // Proxy server IP address
  port?: number // Proxy server port
  type?: ProxyTypeInputUnion // Proxy type
}

/**
 * Sends a simple network request to the Telegram servers via proxy; for testing only.
 * Can be called before authorization
 * @param {Object} params
 * @param {string} [params.server] - Proxy server IP address
 * @param {number} [params.port] - Proxy server port
 * @param {ProxyTypeInputUnion} [params.type] - Proxy type
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<TestProxyParams, OkUnion>>}
 */
export type testProxy<ExtensionT> = (
  params?: TestProxyParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<TestProxyParams, OkUnion> & ExtensionT>
