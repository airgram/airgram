import { ApiRequestOptions, ApiResponse } from '../airgram'
import { BasicGroupFullInfoUnion } from '../outputs'

export interface GetBasicGroupFullInfoParams {
  basicGroupId?: number // Basic group identifier
}

/**
 * Returns full information about a basic group by its identifier
 * @param {Object} params
 * @param {number} [params.basicGroupId] - Basic group identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetBasicGroupFullInfoParams, BasicGroupFullInfoUnion>>}
 */
export type getBasicGroupFullInfo = (
  params?: GetBasicGroupFullInfoParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetBasicGroupFullInfoParams, BasicGroupFullInfoUnion>>
