import { ApiRequestOptions, ApiResponse } from '../airgram'
import { NetworkStatisticsUnion } from '../outputs'

export interface GetNetworkStatisticsParams {
  onlyCurrent?: boolean // If true, returns only data for the current library launch
}

/**
 * Returns network data usage statistics. Can be called before authorization
 * @param {Object} params
 * @param {boolean} [params.onlyCurrent] - If true, returns only data for the current
 * library launch
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetNetworkStatisticsParams, NetworkStatisticsUnion>>}
 */
export type getNetworkStatistics = (
  params?: GetNetworkStatisticsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetNetworkStatisticsParams, NetworkStatisticsUnion>>
