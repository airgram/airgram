import { ApiRequestOptions, ApiResponse } from '../airgram'
import { UsersUnion } from '../outputs'

export interface GetBlockedUsersParams {
  offset?: number // Number of users to skip in the result; must be non-negative
  limit?: number // The maximum number of users to return; up to 100
}

/**
 * Returns users that were blocked by the current user
 * @param {Object} params
 * @param {number} [params.offset] - Number of users to skip in the result; must
 * be non-negative
 * @param {number} [params.limit] - The maximum number of users to return; up to
 * 100
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetBlockedUsersParams, UsersUnion>>}
 */
export type getBlockedUsers = (
  params?: GetBlockedUsersParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetBlockedUsersParams, UsersUnion>>
