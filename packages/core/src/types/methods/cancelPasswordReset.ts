import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'



/**
 * Cancels reset of 2-step verification password. The method can be called if passwordState.pending_reset_date
 * > 0
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, OkUnion>>}
 */
export type cancelPasswordReset = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, OkUnion>>
