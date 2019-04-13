import { NetworkStatisticsEntryInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

/**
 * Adds the specified data to data usage statistics. Can be called before authorization
 * @param {Object} params
 * @param {NetworkStatisticsEntryInputUnion} [params.entry] - The network statistics
 * entry with the data to be added to statistics
 * @param {Object} state
 * @returns {OkUnion}
 */
export type AddNetworkStatisticsMethod = <ResponseT = OkUnion>(
  params: AddNetworkStatisticsParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface AddNetworkStatisticsParams {
  /** The network statistics entry with the data to be added to statistics */
  entry?: NetworkStatisticsEntryInputUnion
}
