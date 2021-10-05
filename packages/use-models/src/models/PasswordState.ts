import { EmailAddressAuthenticationCodeInfo } from '@airgram/core'

/** Represents the current state of 2-step verification */
export class PasswordStateBaseModel {
  public _: 'passwordState'

  /** True, if a 2-step verification password is set */
  public hasPassword: boolean

  /** Hint for the password; may be empty */
  public passwordHint: string

  /** True, if a recovery email is set */
  public hasRecoveryEmailAddress: boolean

  /** True, if some Telegram Passport elements were saved */
  public hasPassportData: boolean

  /**
   * Information about the recovery email address to which the confirmation email was
   * sent; may be null
   */
  public recoveryEmailAddressCodeInfo?: EmailAddressAuthenticationCodeInfo

  /**
   * If not 0, point in time (Unix timestamp) after which the password can be reset immediately
   * using resetPassword
   */
  public pendingResetDate: number
}
