import { ProxiesUnion } from '../outputs'

/**
 * Returns list of proxies that are currently set up. Can be called before authorization
 * @param {Object} state
 * @returns {ProxiesUnion}
 */
export type GetProxiesMethod = <ResponseT = ProxiesUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
