import { RichTextUnion } from '@airgram/core'

/** A concatenation of rich texts */
export class RichTextsBaseModel {
  public _: 'richTexts'

  /** Texts */
  public texts: RichTextUnion[]
}
