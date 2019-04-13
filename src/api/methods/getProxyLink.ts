import { TextUnion } from '../outputs'

/**
 * Returns an HTTPS link, which can be used to add a proxy. Available only for SOCKS5
 * and MTProto proxies. Can be called before authorization
 * @param {Object} params
 * @param {number} [params.proxyId] - Proxy identifier
 * @param {Object} state
 * @returns {TextUnion}
 */
export type GetProxyLinkMethod = <ResponseT = TextUnion>(
  params: GetProxyLinkParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetProxyLinkParams {
  /** Proxy identifier */
  proxyId?: number
}
