/** Contains information about an inline button of type inlineKeyboardButtonTypeLoginUrl */
export type LoginUrlInfoUnion = LoginUrlInfoOpen
  | LoginUrlInfoRequestConfirmation

/** An HTTP url needs to be open */
export interface LoginUrlInfoOpen {
  _: 'loginUrlInfoOpen'
  /** The URL to open */
  url: string
  /** True, if there is no need to show an ordinary open URL confirm */
  skipConfirm: boolean
}

/** An authorization confirmation dialog needs to be shown to the user */
export interface LoginUrlInfoRequestConfirmation {
  _: 'loginUrlInfoRequestConfirmation'
  /** An HTTP URL to be opened */
  url: string
  /** A domain of the URL */
  domain: string
  /** User identifier of a bot linked with the website */
  botUserId: number
  /**
   * True, if the user needs to be requested to give the permission to the bot to send
   * them messages
   */
  requestWriteAccess: boolean
}
