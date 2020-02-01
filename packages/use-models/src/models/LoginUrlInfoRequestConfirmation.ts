/** An authorization confirmation dialog needs to be shown to the user */
export class LoginUrlInfoRequestConfirmationBaseModel {
  public _: 'loginUrlInfoRequestConfirmation'

  /** An HTTP URL to be opened */
  public url: string

  /** A domain of the URL */
  public domain: string

  /** User identifier of a bot linked with the website */
  public botUserId: number

  /**
   * True, if the user needs to be requested to give the permission to the bot to send
   * them messages
   */
  public requestWriteAccess: boolean
}
