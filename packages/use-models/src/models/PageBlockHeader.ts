import { RichTextUnion } from '@airgram/core'

/** A header */
export class PageBlockHeaderBaseModel {
  public _: 'pageBlockHeader'

  /** Header */
  public header: RichTextUnion
}
