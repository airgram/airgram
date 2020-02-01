import { RichTextUnion } from '@airgram/core'

/** A rich text URL link */
export class RichTextUrlBaseModel {
  public _: 'richTextUrl'

  /** Text */
  public text: RichTextUnion

  /** URL */
  public url: string

  /** True, if the URL has cached instant view server-side */
  public isCached: boolean
}
