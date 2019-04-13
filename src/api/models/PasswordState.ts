/** Represents the current state of 2-step verification */
export class PasswordStateBaseModel {
  public _: 'passwordState'
  /** True if a 2-step verification password is set */
  public hasPassword: boolean
  /** Hint for the password; can be empty */
  public passwordHint: string
  /** True if a recovery email is set */
  public hasRecoveryEmailAddress: boolean
  /** True if some Telegram Passport elements were saved */
  public hasPassportData: boolean
  /** Pattern of the email address to which the confirmation email was sent */
  public unconfirmedRecoveryEmailAddressPattern: string
}
