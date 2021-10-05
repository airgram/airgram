/**
 * The link contains a request of Telegram passport data. Call getPassportAuthorizationForm
 * with the given parameters to process the link if the link was received from outside
 * of the app, otherwise ignore it
 */
export class InternalLinkTypePassportDataRequestBaseModel {
  public _: 'internalLinkTypePassportDataRequest'

  /** User identifier of the service's bot */
  public botUserId: number

  /** Telegram Passport element types requested by the service */
  public scope: string

  /** Service's public key */
  public publicKey: string

  /** Unique request identifier provided by the service */
  public nonce: string

  /**
   * An HTTP URL to open once the request is finished or canceled with the parameter tg_passport=success
   * or tg_passport=cancel respectively. If empty, then the link tgbot{bot_user_id}://passport/success
   * or tgbot{bot_user_id}://passport/cancel needs to be opened instead
   */
  public callbackUrl: string
}
