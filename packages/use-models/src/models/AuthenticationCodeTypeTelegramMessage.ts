/**
 * An authentication code is delivered via a private Telegram message, which can be
 * viewed from another active session
 */
export class AuthenticationCodeTypeTelegramMessageBaseModel {
  public _: 'authenticationCodeTypeTelegramMessage'

  /** Length of the code */
  public length: number
}
