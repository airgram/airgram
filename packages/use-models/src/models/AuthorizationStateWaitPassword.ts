/** The user has been authorized, but needs to enter a password to start using the application */
export class AuthorizationStateWaitPasswordBaseModel {
  public _: 'authorizationStateWaitPassword'

  /** Hint for the password; may be empty */
  public passwordHint: string

  /** True, if a recovery email address has been set up */
  public hasRecoveryEmailAddress: boolean

  /**
   * Pattern of the email address to which the recovery email was sent; empty until a
   * recovery email has been sent
   */
  public recoveryEmailAddressPattern: string
}
