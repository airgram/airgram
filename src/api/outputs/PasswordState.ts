export type PasswordStateUnion = PasswordState

/** Represents the current state of 2-step verification */
export interface PasswordState {
  _: 'passwordState'
  /** True if a 2-step verification password is set */
  hasPassword: boolean
  /** Hint for the password; can be empty */
  passwordHint: string
  /** True if a recovery email is set */
  hasRecoveryEmailAddress: boolean
  /** True if some Telegram Passport elements were saved */
  hasPassportData: boolean
  /** Pattern of the email address to which the confirmation email was sent */
  unconfirmedRecoveryEmailAddressPattern: string
}
