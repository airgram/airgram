import { ApiRequestOptions, ApiResponse } from '../airgram'
import { AuthenticationCodeInfoUnion } from '../outputs'

/**
 * Resends phone number confirmation code
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, AuthenticationCodeInfoUnion>>}
 */
export type resendPhoneNumberConfirmationCode<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, AuthenticationCodeInfoUnion> & ExtensionT>
