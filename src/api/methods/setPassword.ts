import { PasswordStateUnion } from '../outputs'

/**
 * Changes the password for the user. If a new recovery email address is specified,
 * then the error EMAIL_UNCONFIRMED is returned and the password change will not be
 * applied until the new recovery email address has been confirmed. The application
 * should periodically call getPasswordState to check whether the new email address
 * has been confirmed
 * @param {Object} params
 * @param {string} [params.oldPassword] - Previous password of the user
 * @param {string} [params.newPassword] - New password of the user; may be empty
 * to remove the password
 * @param {string} [params.newHint] - New password hint; may be empty
 * @param {boolean} [params.setRecoveryEmailAddress] - Pass true if the recovery
 * email address should be changed
 * @param {string} [params.newRecoveryEmailAddress] - New recovery email address;
 * may be empty
 * @param {Object} state
 * @returns {PasswordStateUnion}
 */
export type SetPasswordMethod = <ResponseT = PasswordStateUnion>(
  params: SetPasswordParams,
  state?: Record<string, any>
) => Promise<ResponseT>

export interface SetPasswordParams {
  /** Previous password of the user */
  oldPassword?: string
  /** New password of the user; may be empty to remove the password */
  newPassword?: string
  /** New password hint; may be empty */
  newHint?: string
  /** Pass true if the recovery email address should be changed */
  setRecoveryEmailAddress?: boolean
  /** New recovery email address; may be empty */
  newRecoveryEmailAddress?: string
}
