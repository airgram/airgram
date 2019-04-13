import { PageBlockUnion, Photo, RichTextUnion } from '../outputs'

/** An embedded post */
export class PageBlockEmbeddedPostBaseModel {
  public _: 'pageBlockEmbeddedPost'
  /** Web page URL */
  public url: string
  /** Post author */
  public author: string
  /** Post author photo */
  public authorPhoto: Photo
  /** Point in time (Unix timestamp) when the post was created; 0 if unknown */
  public date: number
  /** Post content */
  public pageBlocks: PageBlockUnion[]
  /** Post caption */
  public caption: RichTextUnion
}
