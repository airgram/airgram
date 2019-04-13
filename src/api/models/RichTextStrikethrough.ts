import { RichTextUnion } from '../outputs'

/** A strike-through rich text */
export class RichTextStrikethroughBaseModel {
  public _: 'richTextStrikethrough'
  /** Text */
  public text: RichTextUnion
}
