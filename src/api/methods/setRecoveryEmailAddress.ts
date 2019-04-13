import { PasswordStateUnion } from '../outputs'

/**
 * Changes the recovery email address of the user. If a new recovery email address is
 * specified, then the error EMAIL_UNCONFIRMED is returned and the email address will
 * not be changed until the new email has been confirmed. The application should periodically
 * call getPasswordState to check whether the email address has been confirmed. If new_recovery_email_address
 * is the same as the email address that is currently set up, this call succeeds immediately
 * and aborts all other requests waiting for an email confirmation
 * @param {Object} params
 * @param {string} [params.password] - Password of the current user
 * @param {string} [params.newRecoveryEmailAddress] - New recovery email address
 * @param {Object} state
 * @returns {PasswordStateUnion}
 */
export type SetRecoveryEmailAddressMethod = <ResponseT = PasswordStateUnion>(
  params: SetRecoveryEmailAddressParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetRecoveryEmailAddressParams {
  /** Password of the current user */
  password?: string
  /** New recovery email address */
  newRecoveryEmailAddress?: string
}
