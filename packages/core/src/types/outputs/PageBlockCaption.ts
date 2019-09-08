import { RichTextUnion } from './index'

export type PageBlockCaptionUnion = PageBlockCaption

/**
 * Contains a caption of an instant view web page block, consisting of a text and a
 * trailing credit
 */
export interface PageBlockCaption {
  _: 'pageBlockCaption'
  /** Content of the caption */
  text: RichTextUnion
  /** Block credit (like HTML tag <cite>) */
  credit: RichTextUnion
}
