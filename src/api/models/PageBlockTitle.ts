import { RichTextUnion } from '../outputs'

/** The title of a page */
export class PageBlockTitleBaseModel {
  public _: 'pageBlockTitle'
  /** Title */
  public title: RichTextUnion
}
