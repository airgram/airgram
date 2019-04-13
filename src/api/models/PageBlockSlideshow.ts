import { PageBlockUnion, RichTextUnion } from '../outputs'

/** A slideshow */
export class PageBlockSlideshowBaseModel {
  public _: 'pageBlockSlideshow'
  /** Slideshow item contents */
  public pageBlocks: PageBlockUnion[]
  /** Block caption */
  public caption: RichTextUnion
}
