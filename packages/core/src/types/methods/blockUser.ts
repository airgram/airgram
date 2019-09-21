import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface BlockUserParams {
  userId?: number // User identifier
}

/**
 * Adds a user to the blacklist
 * @param {Object} params
 * @param {number} [params.userId] - User identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<BlockUserParams, OkUnion>>}
 */
export type blockUser = (
  params?: BlockUserParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<BlockUserParams, OkUnion>>
