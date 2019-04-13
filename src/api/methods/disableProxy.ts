import { OkUnion } from '../outputs'

/**
 * Disables the currently enabled proxy. Can be called before authorization
 * @param {Object} state
 * @returns {OkUnion}
 */
export type DisableProxyMethod = <ResponseT = OkUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
