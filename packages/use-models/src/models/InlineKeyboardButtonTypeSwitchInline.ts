/** A button that forces an inline query to the bot to be inserted in the input field */
export class InlineKeyboardButtonTypeSwitchInlineBaseModel {
  public _: 'inlineKeyboardButtonTypeSwitchInline'

  /** Inline query to be sent to the bot */
  public query: string

  /** True, if the inline query must be sent from the current chat */
  public inCurrentChat: boolean
}
