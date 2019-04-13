import { KeyboardButtonTypeUnion } from './index'

export type KeyboardButtonUnion = KeyboardButton

/** Represents a single button in a bot keyboard */
export interface KeyboardButton {
  _: 'keyboardButton'
  /** Text of the button */
  text: string
  /** Type of the button */
  type: KeyboardButtonTypeUnion
}
