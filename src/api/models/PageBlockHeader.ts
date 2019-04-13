import { RichTextUnion } from '../outputs'

/** A header */
export class PageBlockHeaderBaseModel {
  public _: 'pageBlockHeader'
  /** Header */
  public header: RichTextUnion
}
