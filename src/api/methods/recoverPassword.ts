import { PasswordStateUnion } from '../outputs'

/**
 * Recovers the password using a recovery code sent to an email address that was previously
 * set up
 * @param {Object} params
 * @param {string} [params.recoveryCode] - Recovery code to check
 * @param {Object} state
 * @returns {PasswordStateUnion}
 */
export type RecoverPasswordMethod = <ResponseT = PasswordStateUnion>(
  params: RecoverPasswordParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface RecoverPasswordParams {
  /** Recovery code to check */
  recoveryCode?: string
}
