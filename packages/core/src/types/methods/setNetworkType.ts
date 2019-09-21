import { ApiRequestOptions, ApiResponse } from '../airgram'
import { NetworkTypeInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface SetNetworkTypeParams {
  type?: NetworkTypeInputUnion // The new network type. By default, networkTypeOther
}

/**
 * Sets the current network type. Can be called before authorization. Calling this method
 * forces all network connections to reopen, mitigating the delay in switching between
 * different networks, so it should be called whenever the network is changed, even
 * if the network type remains the same. Network type is used to check whether the library
 * can use the network at all and also for collecting detailed network data usage statistics
 * @param {Object} params
 * @param {NetworkTypeInputUnion} [params.type] - The new network type. By default,
 * networkTypeOther
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetNetworkTypeParams, OkUnion>>}
 */
export type setNetworkType = (
  params?: SetNetworkTypeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetNetworkTypeParams, OkUnion>>
