import { Document } from '@airgram/core'

/** A small image inside the text */
export class RichTextIconBaseModel {
  public _: 'richTextIcon'

  /** The image represented as a document. The image can be in GIF, JPEG or PNG format */
  public document: Document

  /** Width of a bounding box in which the image should be shown; 0 if unknown */
  public width: number

  /** Height of a bounding box in which the image should be shown; 0 if unknown */
  public height: number
}
