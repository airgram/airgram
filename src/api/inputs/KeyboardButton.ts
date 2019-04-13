import { KeyboardButtonTypeInputUnion } from './index'

export type KeyboardButtonInputUnion = KeyboardButtonInput

/** Represents a single button in a bot keyboard */
export interface KeyboardButtonInput {
  _: 'keyboardButton'
  /** Text of the button */
  text?: string
  /** Type of the button */
  type?: KeyboardButtonTypeInputUnion
}
