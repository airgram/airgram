import { OkUnion } from '../outputs'

/**
 * Requests to send a password recovery code to an email address that was previously
 * set up. Works only when the current authorization state is authorizationStateWaitPassword
 * @param {Object} state
 * @returns {OkUnion}
 */
export type RequestAuthenticationPasswordRecoveryMethod = <ResponseT = OkUnion>(
  state?: Record<string, any>
) => Promise<ResponseT>
