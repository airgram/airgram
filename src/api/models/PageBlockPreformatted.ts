import { RichTextUnion } from '../outputs'

/** A preformatted text paragraph */
export class PageBlockPreformattedBaseModel {
  public _: 'pageBlockPreformatted'
  /** Paragraph text */
  public text: RichTextUnion
  /** Programming language for which the text should be formatted */
  public language: string
}
