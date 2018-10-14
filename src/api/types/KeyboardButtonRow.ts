import { KeyboardButtonUnion } from './KeyboardButton'

export interface KeyboardButtonRow {
  _: 'keyboardButtonRow'
  buttons: KeyboardButtonUnion[]
}

export type KeyboardButtonRowUnion = KeyboardButtonRow
