import { RichTextUnion } from '@airgram/core'

/** A preformatted text paragraph */
export class PageBlockPreformattedBaseModel {
  public _: 'pageBlockPreformatted'

  /** Paragraph text */
  public text: RichTextUnion

  /** Programming language for which the text needs to be formatted */
  public language: string
}
