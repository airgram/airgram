import { TextEntityInput } from './index'

export type FormattedTextInputUnion = FormattedTextInput

/** A text with some entities */
export interface FormattedTextInput {
  _: 'formattedText'
  /** The text */
  text?: string
  /**
   * Entities contained in the text. Entities can be nested, but must not mutually intersect
   * with each other. Pre, Code and PreCode entities can't contain other entities. Bold,
   * Italic, Underline, Strikethrough, and Spoiler entities can contain and to be contained
   * in all other entities. All other entities can't contain each other
   */
  entities?: TextEntityInput[]
}
