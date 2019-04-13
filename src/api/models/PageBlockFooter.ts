import { RichTextUnion } from '../outputs'

/** The footer of a page */
export class PageBlockFooterBaseModel {
  public _: 'pageBlockFooter'
  /** Footer */
  public footer: RichTextUnion
}
