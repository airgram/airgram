import { RichTextUnion } from '@airgram/core'

/** A bold rich text */
export class RichTextBoldBaseModel {
  public _: 'richTextBold'

  /** Text */
  public text: RichTextUnion
}
