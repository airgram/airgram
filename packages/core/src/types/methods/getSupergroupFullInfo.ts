import { ApiRequestOptions, ApiResponse } from '../airgram'
import { SupergroupFullInfoUnion } from '../outputs'

export interface GetSupergroupFullInfoParams {
  supergroupId?: number // Supergroup or channel identifier
}

/**
 * Returns full information about a supergroup or channel by its identifier, cached
 * for up to 1 minute
 * @param {Object} params
 * @param {number} [params.supergroupId] - Supergroup or channel identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetSupergroupFullInfoParams, SupergroupFullInfoUnion>>}
 */
export type getSupergroupFullInfo = (
  params?: GetSupergroupFullInfoParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetSupergroupFullInfoParams, SupergroupFullInfoUnion>>
