import { RichTextUnion } from '@airgram/core'

/** A superscript rich text */
export class RichTextSuperscriptBaseModel {
  public _: 'richTextSuperscript'

  /** Text */
  public text: RichTextUnion
}
