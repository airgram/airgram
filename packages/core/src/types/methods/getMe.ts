import { ApiRequestOptions, ApiResponse } from '../airgram'
import { UserUnion } from '../outputs'

/**
 * Returns the current user
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, UserUnion>>}
 */
export type getMe = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, UserUnion>>
