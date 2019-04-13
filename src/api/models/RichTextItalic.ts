import { RichTextUnion } from '../outputs'

/** An italicized rich text */
export class RichTextItalicBaseModel {
  public _: 'richTextItalic'
  /** Text */
  public text: RichTextUnion
}
