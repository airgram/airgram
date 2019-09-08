import { RichTextUnion } from '@airgram/core'

/** A text paragraph */
export class PageBlockParagraphBaseModel {
  public _: 'pageBlockParagraph'

  /** Paragraph text */
  public text: RichTextUnion
}
