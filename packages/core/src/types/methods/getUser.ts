import { ApiRequestOptions, ApiResponse } from '../airgram'
import { UserUnion } from '../outputs'

export interface GetUserParams {
  userId?: number // User identifier
}

/**
 * Returns information about a user by their identifier. This is an offline request
 * if the current user is not a bot
 * @param {Object} params
 * @param {number} [params.userId] - User identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetUserParams, UserUnion>>}
 */
export type getUser<ExtensionT> = (
  params?: GetUserParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetUserParams, UserUnion> & ExtensionT>
