import { RichTextUnion } from '@airgram/core'

/** The author and publishing date of a page */
export class PageBlockAuthorDateBaseModel {
  public _: 'pageBlockAuthorDate'

  /** Author */
  public author: RichTextUnion

  /** Point in time (Unix timestamp) when the article was published; 0 if unknown */
  public publishDate: number
}
