import { ApiRequestOptions, ApiResponse } from '../airgram'
import { AuthenticationCodeInfoUnion } from '../outputs'



/**
 * Re-sends the authentication code sent to confirm a new phone number for the current
 * user. Works only if the previously received authenticationCodeInfo next_code_type
 * was not null and the server-specified timeout has passed
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, AuthenticationCodeInfoUnion>>}
 */
export type resendChangePhoneNumberCode = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, AuthenticationCodeInfoUnion>>
