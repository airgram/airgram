import { EmailAddressAuthenticationCodeInfo } from './index'

export type PasswordStateUnion = PasswordState

/** Represents the current state of 2-step verification */
export interface PasswordState {
  _: 'passwordState'
  /** True, if a 2-step verification password is set */
  hasPassword: boolean
  /** Hint for the password; may be empty */
  passwordHint: string
  /** True, if a recovery email is set */
  hasRecoveryEmailAddress: boolean
  /** True, if some Telegram Passport elements were saved */
  hasPassportData: boolean
  /**
   * Information about the recovery email address to which the confirmation email was
   * sent; may be null
   */
  recoveryEmailAddressCodeInfo?: EmailAddressAuthenticationCodeInfo
  /**
   * If not 0, point in time (Unix timestamp) after which the password can be reset immediately
   * using resetPassword
   */
  pendingResetDate: number
}
