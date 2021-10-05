import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ToggleSupergroupIsBroadcastGroupParams {
  supergroupId?: number // Identifier of the supergroup
}

/**
 * Upgrades supergroup to a broadcast group; requires owner privileges in the supergroup
 * @param {Object} params
 * @param {number} [params.supergroupId] - Identifier of the supergroup
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleSupergroupIsBroadcastGroupParams, OkUnion>>}
 */
export type toggleSupergroupIsBroadcastGroup = (
  params?: ToggleSupergroupIsBroadcastGroupParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleSupergroupIsBroadcastGroupParams, OkUnion>>
