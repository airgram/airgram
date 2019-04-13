import { NetworkStatisticsUnion } from '../outputs'

/**
 * Returns network data usage statistics. Can be called before authorization
 * @param {Object} params
 * @param {boolean} [params.onlyCurrent] - If true, returns only data for the current
 * library launch
 * @param {Object} state
 * @returns {NetworkStatisticsUnion}
 */
export type GetNetworkStatisticsMethod = <ResponseT = NetworkStatisticsUnion>(
  params: GetNetworkStatisticsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface GetNetworkStatisticsParams {
  /** If true, returns only data for the current library launch */
  onlyCurrent?: boolean
}
