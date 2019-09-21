import { ApiRequestOptions, ApiResponse } from '../airgram'
import { UserUnion } from '../outputs'

/**
 * Returns a user that can be contacted to get support
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, UserUnion>>}
 */
export type getSupportUser = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, UserUnion>>
