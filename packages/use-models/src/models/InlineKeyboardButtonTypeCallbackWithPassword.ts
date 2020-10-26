/**
 * A button that asks for password of the current user and then sends a callback query
 * to a bot
 */
export class InlineKeyboardButtonTypeCallbackWithPasswordBaseModel {
  public _: 'inlineKeyboardButtonTypeCallbackWithPassword'

  /** Data to be sent to the bot via a callback query */
  public data: string
}
