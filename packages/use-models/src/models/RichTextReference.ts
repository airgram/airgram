import { RichTextUnion } from '@airgram/core'

/** A rich text reference of a text on the same web page */
export class RichTextReferenceBaseModel {
  public _: 'richTextReference'

  /** The text */
  public text: RichTextUnion

  /** The text to show on click */
  public referenceText: RichTextUnion

  /** An HTTP URL, opening the reference */
  public url: string
}
