import { TextEntityInput } from './index'

export type FormattedTextInputUnion = FormattedTextInput

/** A text with some entities */
export interface FormattedTextInput {
  _: 'formattedText'
  /** The text */
  text?: string
  /** Entities contained in the text */
  entities?: TextEntityInput[]
}
