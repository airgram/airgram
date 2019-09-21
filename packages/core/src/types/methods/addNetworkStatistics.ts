import { ApiRequestOptions, ApiResponse } from '../airgram'
import { NetworkStatisticsEntryInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface AddNetworkStatisticsParams {
  entry?: NetworkStatisticsEntryInputUnion // The network statistics entry with the data to be added to statistics
}

/**
 * Adds the specified data to data usage statistics. Can be called before authorization
 * @param {Object} params
 * @param {NetworkStatisticsEntryInputUnion} [params.entry] - The network statistics
 * entry with the data to be added to statistics
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<AddNetworkStatisticsParams, OkUnion>>}
 */
export type addNetworkStatistics = (
  params?: AddNetworkStatisticsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<AddNetworkStatisticsParams, OkUnion>>
