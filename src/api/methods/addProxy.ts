import { ProxyTypeInputUnion } from '../inputs'
import { ProxyUnion } from '../outputs'

/**
 * Adds a proxy server for network requests. Can be called before authorization
 * @param {Object} params
 * @param {string} [params.server] - Proxy server IP address
 * @param {number} [params.port] - Proxy server port
 * @param {boolean} [params.enable] - True, if the proxy should be enabled
 * @param {ProxyTypeInputUnion} [params.type] - Proxy type
 * @param {Object} state
 * @returns {ProxyUnion}
 */
export type AddProxyMethod = <ResponseT = ProxyUnion>(
  params: AddProxyParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface AddProxyParams {
  /** Proxy server IP address */
  server?: string
  /** Proxy server port */
  port?: number
  /** True, if the proxy should be enabled */
  enable?: boolean
  /** Proxy type */
  type?: ProxyTypeInputUnion
}
