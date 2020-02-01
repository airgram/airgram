import { RichTextUnion } from '@airgram/core'

/** A strikethrough rich text */
export class RichTextStrikethroughBaseModel {
  public _: 'richTextStrikethrough'

  /** Text */
  public text: RichTextUnion
}
