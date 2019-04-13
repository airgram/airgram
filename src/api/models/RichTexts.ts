import { RichTextUnion } from '../outputs'

/** A concatenation of rich texts */
export class RichTextsBaseModel {
  public _: 'richTexts'
  /** Texts */
  public texts: RichTextUnion[]
}
