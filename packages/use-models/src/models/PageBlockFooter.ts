import { RichTextUnion } from '@airgram/core'

/** The footer of a page */
export class PageBlockFooterBaseModel {
  public _: 'pageBlockFooter'

  /** Footer */
  public footer: RichTextUnion
}
