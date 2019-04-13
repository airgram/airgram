import { RichTextUnion } from '../outputs'

/** An underlined rich text */
export class RichTextUnderlineBaseModel {
  public _: 'richTextUnderline'
  /** Text */
  public text: RichTextUnion
}
