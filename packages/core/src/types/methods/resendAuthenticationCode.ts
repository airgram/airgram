import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'



/**
 * Re-sends an authentication code to the user. Works only when the current authorization
 * state is authorizationStateWaitCode, the next_code_type of the result is not null
 * and the server-specified timeout has passed
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, OkUnion>>}
 */
export type resendAuthenticationCode = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, OkUnion>>
