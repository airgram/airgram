import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface UnblockUserParams {
  userId?: number // User identifier
}

/**
 * Removes a user from the blacklist
 * @param {Object} params
 * @param {number} [params.userId] - User identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<UnblockUserParams, OkUnion>>}
 */
export type unblockUser = (
  params?: UnblockUserParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<UnblockUserParams, OkUnion>>
