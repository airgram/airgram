import { RichTextUnion } from '@airgram/core'

/** A pull quote */
export class PageBlockPullQuoteBaseModel {
  public _: 'pageBlockPullQuote'

  /** Quote text */
  public text: RichTextUnion

  /** Quote credit */
  public credit: RichTextUnion
}
