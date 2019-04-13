/**
 * An authentication code is delivered via a private Telegram message, which can be
 * viewed in another client
 */
export class AuthenticationCodeTypeTelegramMessageBaseModel {
  public _: 'authenticationCodeTypeTelegramMessage'
  /** Length of the code */
  public length: number
}
