import { InlineKeyboardButtonTypeUnion } from './index'

export type InlineKeyboardButtonUnion = InlineKeyboardButton

/** Represents a single button in an inline keyboard */
export interface InlineKeyboardButton {
  _: 'inlineKeyboardButton'
  /** Text of the button */
  text: string
  /** Type of the button */
  type: InlineKeyboardButtonTypeUnion
}
