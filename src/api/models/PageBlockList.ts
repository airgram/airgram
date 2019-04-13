import { RichTextUnion } from '../outputs'

/** A list of texts */
export class PageBlockListBaseModel {
  public _: 'pageBlockList'
  /** Texts */
  public items: RichTextUnion[]
  /** True, if the items should be marked with numbers */
  public isOrdered: boolean
}
