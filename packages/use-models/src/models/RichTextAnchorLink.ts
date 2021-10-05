import { RichTextUnion } from '@airgram/core'

/** A link to an anchor on the same web page */
export class RichTextAnchorLinkBaseModel {
  public _: 'richTextAnchorLink'

  /** The link text */
  public text: RichTextUnion

  /** The anchor name. If the name is empty, the link must bring back to top */
  public anchorName: string

  /** An HTTP URL, opening the anchor */
  public url: string
}
