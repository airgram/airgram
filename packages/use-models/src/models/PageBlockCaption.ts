import { RichTextUnion } from '@airgram/core'

/**
 * Contains a caption of an instant view web page block, consisting of a text and a
 * trailing credit
 */
export class PageBlockCaptionBaseModel {
  public _: 'pageBlockCaption'

  /** Content of the caption */
  public text: RichTextUnion

  /** Block credit (like HTML tag <cite>) */
  public credit: RichTextUnion
}
