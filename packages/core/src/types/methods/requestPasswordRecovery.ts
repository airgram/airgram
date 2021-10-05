import { ApiRequestOptions, ApiResponse } from '../airgram'
import { EmailAddressAuthenticationCodeInfoUnion } from '../outputs'



/**
 * Requests to send a 2-step verification password recovery code to an email address
 * that was previously set up
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<never, EmailAddressAuthenticationCodeInfoUnion>>}
 */
export type requestPasswordRecovery = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, EmailAddressAuthenticationCodeInfoUnion>>
