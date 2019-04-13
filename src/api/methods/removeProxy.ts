import { OkUnion } from '../outputs'

/**
 * Removes a proxy server. Can be called before authorization
 * @param {Object} params
 * @param {number} [params.proxyId] - Proxy identifier
 * @param {Object} state
 * @returns {OkUnion}
 */
export type RemoveProxyMethod = <ResponseT = OkUnion>(
  params: RemoveProxyParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface RemoveProxyParams {
  /** Proxy identifier */
  proxyId?: number
}
