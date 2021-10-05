/**
 * A button that opens a specified URL and automatically authorize the current user
 * if allowed to do so
 */
export class InlineKeyboardButtonTypeLoginUrlBaseModel {
  public _: 'inlineKeyboardButtonTypeLoginUrl'

  /** An HTTP URL to open */
  public url: string

  /** Unique button identifier */
  public id: number

  /** If non-empty, new text of the button in forwarded messages */
  public forwardText: string
}
