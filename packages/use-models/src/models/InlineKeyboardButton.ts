import { InlineKeyboardButtonTypeUnion } from '@airgram/core'

/** Represents a single button in an inline keyboard */
export class InlineKeyboardButtonBaseModel {
  public _: 'inlineKeyboardButton'

  /** Text of the button */
  public text: string

  /** Type of the button */
  public type: InlineKeyboardButtonTypeUnion
}
