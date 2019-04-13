import { RichTextUnion } from '../outputs'

/** The subtitle of a page */
export class PageBlockSubtitleBaseModel {
  public _: 'pageBlockSubtitle'
  /** Subtitle */
  public subtitle: RichTextUnion
}
