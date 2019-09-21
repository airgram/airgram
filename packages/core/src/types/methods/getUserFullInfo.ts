import { ApiRequestOptions, ApiResponse } from '../airgram'
import { UserFullInfoUnion } from '../outputs'

export interface GetUserFullInfoParams {
  userId?: number // User identifier
}

/**
 * Returns full information about a user by their identifier
 * @param {Object} params
 * @param {number} [params.userId] - User identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetUserFullInfoParams, UserFullInfoUnion>>}
 */
export type getUserFullInfo = (
  params?: GetUserFullInfoParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetUserFullInfoParams, UserFullInfoUnion>>
