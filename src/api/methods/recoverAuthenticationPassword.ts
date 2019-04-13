import { OkUnion } from '../outputs'

/**
 * Recovers the password with a password recovery code sent to an email address that
 * was previously set up. Works only when the current authorization state is authorizationStateWaitPassword
 * @param {Object} params
 * @param {string} [params.recoveryCode] - Recovery code to check
 * @param {Object} state
 * @returns {OkUnion}
 */
export type RecoverAuthenticationPasswordMethod = <ResponseT = OkUnion>(
  params: RecoverAuthenticationPasswordParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface RecoverAuthenticationPasswordParams {
  /** Recovery code to check */
  recoveryCode?: string
}
