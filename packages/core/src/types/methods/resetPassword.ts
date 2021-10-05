import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ResetPasswordResultUnion } from '../outputs'



/**
 * Removes 2-step verification password without previous password and access to recovery
 * email address. The password can't be reset immediately and the request needs to be
 * repeated after the specified time
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, ResetPasswordResultUnion>>}
 */
export type resetPassword = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, ResetPasswordResultUnion>>
