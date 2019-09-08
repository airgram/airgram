import { RichTextUnion } from '@airgram/core'

/** An italicized rich text */
export class RichTextItalicBaseModel {
  public _: 'richTextItalic'

  /** Text */
  public text: RichTextUnion
}
