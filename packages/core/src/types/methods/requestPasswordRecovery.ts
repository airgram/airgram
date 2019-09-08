import { ApiRequestOptions, ApiResponse } from '../airgram'
import { EmailAddressAuthenticationCodeInfoUnion } from '../outputs'

/**
 * Requests to send a password recovery code to an email address that was previously
 * set up
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, EmailAddressAuthenticationCodeInfoUnion>>}
 */
export type requestPasswordRecovery<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, EmailAddressAuthenticationCodeInfoUnion> & ExtensionT>
