import { PageBlockUnion, RichTextUnion } from '../outputs'

/** A collage */
export class PageBlockCollageBaseModel {
  public _: 'pageBlockCollage'
  /** Collage item contents */
  public pageBlocks: PageBlockUnion[]
  /** Block caption */
  public caption: RichTextUnion
}
