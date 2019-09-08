import { PageBlockCaption, PageBlockUnion, Photo } from '@airgram/core'

/** An embedded post */
export class PageBlockEmbeddedPostBaseModel {
  public _: 'pageBlockEmbeddedPost'

  /** Web page URL */
  public url: string

  /** Post author */
  public author: string

  /** Post author photo; may be null */
  public authorPhoto?: Photo

  /** Point in time (Unix timestamp) when the post was created; 0 if unknown */
  public date: number

  /** Post content */
  public pageBlocks: PageBlockUnion[]

  /** Post caption */
  public caption: PageBlockCaption
}
