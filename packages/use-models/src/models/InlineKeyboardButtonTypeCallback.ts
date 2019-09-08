/** A button that sends a special callback query to a bot */
export class InlineKeyboardButtonTypeCallbackBaseModel {
  public _: 'inlineKeyboardButtonTypeCallback'

  /** Data to be sent to the bot via a callback query */
  public data: string
}
