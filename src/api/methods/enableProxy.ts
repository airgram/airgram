import { OkUnion } from '../outputs'

/**
 * Enables a proxy. Only one proxy can be enabled at a time. Can be called before authorization
 * @param {Object} params
 * @param {number} [params.proxyId] - Proxy identifier
 * @param {Object} state
 * @returns {OkUnion}
 */
export type EnableProxyMethod = <ResponseT = OkUnion>(
  params: EnableProxyParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface EnableProxyParams {
  /** Proxy identifier */
  proxyId?: number
}
