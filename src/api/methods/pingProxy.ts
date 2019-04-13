import { SecondsUnion } from '../outputs'

/**
 * Computes time needed to receive a response from a Telegram server through a proxy.
 * Can be called before authorization
 * @param {Object} params
 * @param {number} [params.proxyId] - Proxy identifier. Use 0 to ping a Telegram
 * server without a proxy
 * @param {Object} state
 * @returns {SecondsUnion}
 */
export type PingProxyMethod = <ResponseT = SecondsUnion>(
  params: PingProxyParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface PingProxyParams {
  /** Proxy identifier. Use 0 to ping a Telegram server without a proxy */
  proxyId?: number
}
