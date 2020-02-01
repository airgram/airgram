/**
 * A button that opens a specified URL and automatically logs in in current user if
 * they allowed to do that
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
