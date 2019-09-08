import { ApiRequestOptions, ApiResponse } from '../airgram'
import { AuthenticationCodeInfoUnion } from '../outputs'

/**
 * Re-sends the authentication code sent to confirm a new phone number for the user.
 * Works only if the previously received authenticationCodeInfo next_code_type was not
 * null
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, AuthenticationCodeInfoUnion>>}
 */
export type resendChangePhoneNumberCode<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, AuthenticationCodeInfoUnion> & ExtensionT>
