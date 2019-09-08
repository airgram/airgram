import { TextEntity } from '@airgram/core'

/** A text with some entities */
export class FormattedTextBaseModel {
  public _: 'formattedText'

  /** The text */
  public text: string

  /** Entities contained in the text */
  public entities: TextEntity[]
}
