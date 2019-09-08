import { TextEntity } from './index'

export type FormattedTextUnion = FormattedText

/** A text with some entities */
export interface FormattedText {
  _: 'formattedText'
  /** The text */
  text: string
  /** Entities contained in the text */
  entities: TextEntity[]
}
