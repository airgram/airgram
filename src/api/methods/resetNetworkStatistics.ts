import { OkUnion } from '../outputs'

/**
 * Resets all network data usage statistics to zero. Can be called before authorization
 * @param {Object} state
 * @returns {OkUnion}
 */
export type ResetNetworkStatisticsMethod = <ResponseT = OkUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
