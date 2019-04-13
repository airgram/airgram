import { ProxyTypeInputUnion } from '../inputs'
import { ProxyUnion } from '../outputs'

/**
 * Edits an existing proxy server for network requests. Can be called before authorization
 * @param {Object} params
 * @param {number} [params.proxyId] - Proxy identifier
 * @param {string} [params.server] - Proxy server IP address
 * @param {number} [params.port] - Proxy server port
 * @param {boolean} [params.enable] - True, if the proxy should be enabled
 * @param {ProxyTypeInputUnion} [params.type] - Proxy type
 * @param {Object} state
 * @returns {ProxyUnion}
 */
export type EditProxyMethod = <ResponseT = ProxyUnion>(
  params: EditProxyParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface EditProxyParams {
  /** Proxy identifier */
  proxyId?: number
  /** Proxy server IP address */
  server?: string
  /** Proxy server port */
  port?: number
  /** True, if the proxy should be enabled */
  enable?: boolean
  /** Proxy type */
  type?: ProxyTypeInputUnion
}
