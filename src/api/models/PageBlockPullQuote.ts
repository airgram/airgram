import { RichTextUnion } from '../outputs'

/** A pull quote */
export class PageBlockPullQuoteBaseModel {
  public _: 'pageBlockPullQuote'
  /** Quote text */
  public text: RichTextUnion
  /** Quote caption */
  public caption: RichTextUnion
}
