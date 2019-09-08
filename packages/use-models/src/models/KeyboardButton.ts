import { KeyboardButtonTypeUnion } from '@airgram/core'

/** Represents a single button in a bot keyboard */
export class KeyboardButtonBaseModel {
  public _: 'keyboardButton'

  /** Text of the button */
  public text: string

  /** Type of the button */
  public type: KeyboardButtonTypeUnion
}
