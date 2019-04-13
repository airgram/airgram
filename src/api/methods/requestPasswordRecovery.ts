import { EmailAddressAuthenticationCodeInfoUnion } from '../outputs'

/**
 * Requests to send a password recovery code to an email address that was previously
 * set up
 * @param {Object} state
 * @returns {EmailAddressAuthenticationCodeInfoUnion}
 */
export type RequestPasswordRecoveryMethod = <ResponseT = EmailAddressAuthenticationCodeInfoUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
