import { RichTextUnion } from '@airgram/core'

/** The title of a page */
export class PageBlockTitleBaseModel {
  public _: 'pageBlockTitle'

  /** Title */
  public title: RichTextUnion
}
