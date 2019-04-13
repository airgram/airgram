import { RichTextUnion } from '../outputs'

/** A block quote */
export class PageBlockBlockQuoteBaseModel {
  public _: 'pageBlockBlockQuote'
  /** Quote text */
  public text: RichTextUnion
  /** Quote caption */
  public caption: RichTextUnion
}
