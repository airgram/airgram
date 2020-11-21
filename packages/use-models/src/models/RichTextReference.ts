import { RichTextUnion } from '@airgram/core'

/** A reference to a richTexts object on the same web page */
export class RichTextReferenceBaseModel {
  public _: 'richTextReference'

  /** The text */
  public text: RichTextUnion

  /**
   * The name of a richTextAnchor object, which is the first element of the target richTexts
   * object
   */
  public anchorName: string

  /** An HTTP URL, opening the reference */
  public url: string
}
