import { TextEntity } from '@airgram/core'

/** A text with some entities */
export class FormattedTextBaseModel {
  public _: 'formattedText'

  /** The text */
  public text: string

  /**
   * Entities contained in the text. Entities can be nested, but must not mutually intersect
   * with each other. Pre, Code and PreCode entities can't contain other entities. Bold,
   * Italic, Underline and Strikethrough entities can contain and to be contained in all
   * other entities. All other entities can't contain each other
   */
  public entities: TextEntity[]
}
