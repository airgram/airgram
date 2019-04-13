import { RichTextUnion } from '../outputs'

/** A rich text URL link */
export class RichTextUrlBaseModel {
  public _: 'richTextUrl'
  /** Text */
  public text: RichTextUnion
  /** URL */
  public url: string
}
